# new feature
# Tags: optional

Feature: Contact fields

  Background:
    Given Go to url "http://www.bignited.be/contact/"

  Scenario: I enter the correct info
    Then I verify that i can enter the correct firstname "Arne"
    Then I verify that i can enter the correct lastname "Van Bavel"
    Then I verify that i can enter the correct email "arne.vanbavel@m2q.be"

  Scenario Outline: I enter the wrong info
    Then I verify that i can enter the wrong firstname <firstname>
    Then I verify that i can enter the wrong lastname <lastname>
    Then I verify that i can enter the wrong email <email>

    Examples: This is test data
      | firstname | lastname | email         |
      |           |          | arne.vanbavel |
      |           |          | fpqerkfpoqkfp |
      |           |          | 2131414141@ |