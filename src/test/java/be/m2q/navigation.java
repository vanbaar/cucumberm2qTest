package be.m2q;

import cucumber.api.PendingException;
import cucumber.api.java.en.Then;

import java.util.Map;

import static com.codeborne.selenide.Selectors.byText;
import static com.codeborne.selenide.Selenide.$;
import static com.codeborne.selenide.Selenide.title;
import static org.junit.Assert.assertTrue;

public class navigation {
    @Then("^I click on$")
    public void iClickOn(Map<String,String> dataMap) throws Throwable {
        for(String item: dataMap.keySet()){
            $(byText(dataMap.get(item))).click();
            System.out.println("I click on " + dataMap.get(item));
            assertTrue(title().contains(dataMap.get(item)));
        }
    }
}
