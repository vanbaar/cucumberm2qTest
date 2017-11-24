package be.m2q;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.openqa.selenium.ie.InternetExplorerDriver;

import java.util.Hashtable;

import static com.codeborne.selenide.Selectors.byId;
import static com.codeborne.selenide.Selectors.byText;
import static com.codeborne.selenide.Selenide.$;
import static com.codeborne.selenide.Selenide.open;
import static org.junit.Assert.assertEquals;

public class contactpage {

    @Then("^I verify that i can enter the correct firstname \"([^\"]*)\"$")
    public void iVerifyThatICanEnterTheCorrectFirstname(String firstname) throws Throwable {
        $(byId("smform-fieldfname1940")).setValue(firstname);
    }

    @Then("^I verify that i can enter the correct lastname \"([^\"]*)\"$")
    public void iVerifyThatICanEnterTheCorrectLastname(String lastname) throws Throwable {
        $(byId("smform-fieldlname1940")).setValue(lastname);
    }

    @Then("^I verify that i can enter the correct email \"([^\"]*)\"$")
    public void iVerifyThatICanEnterTheCorrectEmail(String email) throws Throwable {
        $(byId("smform-field1941")).setValue(email);
    }

    @Then("^I verify that i can enter the wrong firstname (.*)$")
    public void iVerifyThatICanEnterTheWrongFirstnameFirstname(String firstname) throws Throwable {
        $(byId("smform-fieldfname1940")).click();
        $(byId("smform-fieldfname1940")).setValue(firstname);
    }

    @Then("^I verify that i can enter the wrong lastname (.*)$")
    public void iVerifyThatICanEnterTheWrongLastnameLastname(String lastname) throws Throwable {
        $(byId("smform-fieldlname1940")).click();
        $(byId("smform-fieldlname1940")).setValue(lastname);
    }

    @Then("^I verify that i can enter the wrong email (.*)$")
    public void iVerifyThatICanEnterTheWrongEmailEmail(String email) throws Throwable {
        $(byId("smform-field1941")).click();
        $(byId("smform-field1941")).setValue(email);
        $(byText("Contact us")).click();
        assertEquals("Please enter a valid email address.",$(byId("smform-field1941-error")).text() );
    }

    @Given("^Go to url \"([^\"]*)\"$")
    public void goToUrl(String website) throws Throwable {
        open(website);
    }
}
