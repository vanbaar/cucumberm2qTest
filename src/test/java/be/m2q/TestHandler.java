package be.m2q;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        //features = "classpath:seleniumScenarioOutline.feature",
        features = "src/test/resources",
        //tags = "~@form",
        //name = {"PIN"}, //Naam dingen die voor komen in de scenario zin
        glue = "classpath:be.m2q",
        plugin = {"html:target/selenium-reports","rerun:target/rerun.txt"}
)

public class TestHandler {

}
