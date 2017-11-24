# new feature
# Tags: optional

Feature: Homepage

  Scenario Outline: Check the title of the different pages on the website
    Given I am on url <website>
    Then I should see a title that contains <title>

    Examples: Dummy data
      | website                                        | title                  |
      | http://m2q.be/nl                               | M2Q - Software testing |
      | http://m2q.be/nl/diensten/training-en-coaching | Training en Coaching   |
      | http://m2q.be/nl/vind-een-job-bij-m2q          | Vind een job bij M2Q   |
      | http://m2q.be/nl#news                          | M2Q - Software testing |
      | http://m2q.be/nl/contact-nl                    | Contact                |