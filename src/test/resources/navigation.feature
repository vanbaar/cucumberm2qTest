# new feature
# Tags: optional
    
Feature: check navigation
    
Scenario: check if all links work
    Given Go to url "http://www.bignited.be/"
    Then I click on
    |link1|About|
    |link2|Why b.ignited?|
    |link3|Services|
    |link4|Careers|
    |link5|Contact|
