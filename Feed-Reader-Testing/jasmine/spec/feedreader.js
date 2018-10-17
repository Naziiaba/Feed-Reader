/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        /* This is the test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('verified Feed url is defined', function() {
            allFeeds.forEach(function(allFeeds) {
                expect(allFeeds.url).toBeDefined();
                expect(allFeeds.url.length).not.toBe(0);
            });
        });
        /* This test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('verified Feed name is not empty', function() {
            allFeeds.forEach(function(allFeeds) {
                expect(allFeeds.name).toBeDefined();
                expect(allFeeds.name.length).not.toBe(0);
            });
        });
    });
    /* This is the test suite named "The menu" */
    describe('The menu', function() {
        var menuHidden;
        /* This test ensures the menu element is
         * hidden by default. 
         */

        it('verified menu is hidden by default', function() {
            menuHidden = document.body.classList.contains('menu-hidden');
            expect(menuHidden).toBe(true);
        });
        /* This test ensures the menu changes
         * visibility when the menu icon is clicked. 
         */

        it('expect menu is shown after click', function() {
            $('a.menu-icon-link').click();
             menuHidden = document.body.classList.contains("menu-hidden");
             expect(menuHidden).toBe(false);
        });
        //This test is to verify menu is hidden after second click
        it('expect menu is not shown after second click', function() {
            $('a.menu-icon-link').click();
             menuHidden = document.body.classList.contains("menu-hidden");
             expect(menuHidden).toBe(true); 
        });
    });
    /* This is the test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        var entry;
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });
        /* This test ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        it('verified entry element is present', function(done) {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });
    /* This is the test suite named "New Feed Selection"*/
    describe('New Feed Selection', function() {
         // Initial loaded feed setup
        var content;

        beforeEach(function(done) {
            loadFeed(0, function() {
                content = $('.feed').html();

                loadFeed(1, done());
             	
        });
    });
        /*  This is the test that ensures when a new feed is loaded
            by the loadFeed function that the ccontent actually changes.*/
        it('verified new feed is loaded', function(done) {
                expect($('.feed').html()).not.toEqual(content);
                done();
            });
        });
}());