/// <reference types="cypress" />
import {ProjectPage} from '../actions/e2e-actions'
  

  describe('Login/Logout Feature', () => {
    const projectPage = new ProjectPage()

    beforeEach(() => {
      projectPage.navigate()
      projectPage.validateLoginpage()
    })
 
    afterEach(() => {
      projectPage.validateLoginpage()
    })

    describe('positive tests', () => {
        it('should able to login/logout with admin user', () => {
          projectPage.login('admin@admin.com', '2020')
          projectPage.validateHomepage()
          projectPage.logout()
        })
        
        it('should able to keep logged-in/logout with admin user', () => {
          projectPage.login('admin@admin.com', '2020')
          projectPage.validateHomepage()
          projectPage.navigate()
          projectPage.validateHomepage()
          projectPage.logout()
        })

        it('should able to login/logout with normal user', () => {
          projectPage.login('biancunha@gmail.com', '123456')
          projectPage.validateHomepage()
          projectPage.logout()
        })

        it('should not able to login with non exist user', () => {
          projectPage.login('biancunha@hotmail.com', '123456')
        })

        it('should not able to login with wrong password', () => {
          projectPage.login('biancunha@gmail.com', '654321')
        })
    })

    describe('negative tests', () => {
        it('should not able to login with; long text', () => {
            const longText = projectPage.generateRandom()+projectPage.generateRandom()+projectPage.generateRandom()+projectPage.generateRandom()+projectPage.generateRandom()+projectPage.generateRandom()
            projectPage.login(longText, longText)
        })
    
        it('should not able to login with; special chars text', () => {
            const specialText = '+_=-)(*&^#!~`[];\',.<>\/'
            projectPage.login(specialText, specialText)
        })
         
        it('should not able to login with; spaces text', () => {
            const specialText = '                  '
            projectPage.login(specialText, specialText)
        })
      })

  })