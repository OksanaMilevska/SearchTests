describe("users should be able to login and use Extended Search", function(){
	it ("to fill in user information and login", function(){
		//"to fill in user information and login",
		browser.get("http://localhost:2020/#/");
		//fill in login
		element(by.model("authLoginCtrl.user.email")).sendKeys("admin@default.com");
		//fill in password
		element(by.model("authLoginCtrl.user.password")).sendKeys("123");
		//press Login button
		var loginButton = element(by.cssContainingText(".btn", "Log in"));
		loginButton.click()
		//console.log("Hello");
		browser.get("http://localhost:6500/");
		 element(by.buttonText('Show Extended Search')).click();
	})

		
		it ("search by Location", function(){
		
		//element(by.css('input[value="All by "AND""]')).click();
		
		element(by.partialButtonText('Locations')).click();
		//fill in search field
		
		
		var EC = protractor.ExpectedConditions;
		var ProjectLocation = element(by.css('input[placeholder="Enter a location"]'));

		// Waits for the element tag to be clickable.
		
		browser.wait(EC.elementToBeClickable(ProjectLocation), 5000);
		//browser.sleep(10000);
		//user.click();
		//console.log("search");
		ProjectLocation.sendKeys('Turkey');
		browser.sleep(5000);
		element(by.xpath('/html/body/div[5]/div[1]/span[2]/span')).click();
		browser.sleep(5000);		
		//mousemoveOver
		
		element(by.xpath('//*[@id="home-root"]/div[1]/div[3]/div[1]/div[3]/div[6]/div/div/div[1]/div/div[1]/div[4]/div[4]/div[6]')).click();
		browser.sleep(5000);
		element(by.buttonText('Extended Search!')).click();
		
		//verify search results
		var numberOfResults = element(by.css('.count'));
		numberOfResults.getText().then(function(text){
			console.log(text)
		});
		expect(numberOfResults.getText()).toContain('1');
		//console.log("we have texts ");
		//browser.sleep(10000);
		
	})
});