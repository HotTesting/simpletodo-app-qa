let URL = 'http://maxcabrera.com/code/todo-list/'
describe('Navigation TODO', function() {
    it('should have correct title', function() {
        browser.get(URL)
        expect(browser.getTitle()).toBe('Angular2 Seed')
    })
    it('should create a new task', function() {
        browser.get(URL)
        let webelement = $('input.enter-todo')
        webelement.sendKeys('SL')
        browser.driver.sleep(3000)
        webelement.submit()
        let task = $$('todo-list .small-12')
        expect(task.getText()).toContain('SL')
    })
    it('should cancel a task', function() {
        browser.get(URL)
        let current = element.all(by.css('todo-list .small-12'))
        element(by.css("input[type=checkbox]")).click();
        let cancel = element.all(by.css('todo-list .small-12'))
        browser.driver.sleep(3000)
        expect(current.count() == cancel.count()).toBe(false)
        it('should cancel all task', function() {
            browser.get(URL);
            expect(browser.getTitle()).toBe('Angular2 Seed');
            let allcancel = element.all(by.css('.todo-container [type="checkbox"]'));
            expect(allcancel.count()).toBe(0)

        })
    })
})