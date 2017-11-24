package be.m2q;

import cucumber.api.PendingException;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.openqa.selenium.WebDriver;

import static com.codeborne.selenide.Selenide.open;
import static com.codeborne.selenide.Selenide.title;
import static org.junit.Assert.assertTrue;

public class homepage {

    @Before
    public void startBrowser(){
        System.setProperty("selenide.browser", "chrome");
    }

    @Given("^I am on url (.*)$")
    public void iAmOnUrlWebsite(String website) throws Throwable {
        open(website);
    }

    @Then("^I should see a title that contains (.*)$")
    public void iShouldSeeATitleThatContainsTitle(String title) throws Throwable {
        assertTrue(title().contains(title));
    }
}
