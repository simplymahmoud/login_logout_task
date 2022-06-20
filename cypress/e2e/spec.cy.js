/// <reference types="cypress" />
import {
    navigate,
    login,
    validateLoginpage,
    logout,
    validateHomepage,
    generateRandom,
  } from '../actions/e2e-actions'
  

  describe('Login/Logout Feature', () => {
    
    beforeEach(() => {
      navigate()
      validateLoginpage()
    })
 
    afterEach(() => {
      validateLoginpage()
    })

    describe('positive tests', () => {
        it('should able to login/logout with admin user', () => {
            login('admin@admin.com', '2020')
            validateHomepage()
            logout()
        })
        
        it('should able to keep logged-in/logout with admin user', () => {
          login('admin@admin.com', '2020')
          validateHomepage()
          navigate()
          validateHomepage()
          logout()
        })

        it('should able to login/logout with normal user', () => {
            login('biancunha@gmail.com', '123456')
            validateHomepage()
            logout()
        })

        it('should not able to login with non exist user', () => {
          login('biancunha@hotmail.com', '123456')
        })

        it('should not able to login with wrong password', () => {
          login('biancunha@gmail.com', '654321')
        })
    })

    describe('negative tests', () => {
        it('should not able to login with; long text', () => {
            const longText = generateRandom()+generateRandom()+generateRandom()+generateRandom()+generateRandom()+generateRandom()
            login(longText, longText)
        })
    
        it('should not able to login with; special chars text', () => {
            const specialText = '+_=-)(*&^#!~`[];\',.<>\/'
            login(specialText, specialText)
        })
         
        it('should not able to login with; spaces text', () => {
            const specialText = '                  '
            login(specialText, specialText)
        })
      })

  })