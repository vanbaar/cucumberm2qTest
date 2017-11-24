$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("contactField.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# new feature"
    },
    {
      "line": 2,
      "value": "# Tags: optional"
    }
  ],
  "line": 4,
  "name": "Contact fields",
  "description": "",
  "id": "contact-fields",
  "keyword": "Feature"
});
formatter.before({
  "duration": 154986,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Go to url \"http://www.bignited.be/contact/\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.bignited.be/contact/",
      "offset": 11
    }
  ],
  "location": "contactpage.goToUrl(String)"
});
formatter.result({
  "duration": 7330734071,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "I enter the correct info",
  "description": "",
  "id": "contact-fields;i-enter-the-correct-info",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I verify that i can enter the correct firstname \"Arne\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I verify that i can enter the correct lastname \"Van Bavel\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I verify that i can enter the correct email \"arne.vanbavel@m2q.be\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Arne",
      "offset": 49
    }
  ],
  "location": "contactpage.iVerifyThatICanEnterTheCorrectFirstname(String)"
});
formatter.result({
  "duration": 180046736,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Van Bavel",
      "offset": 48
    }
  ],
  "location": "contactpage.iVerifyThatICanEnterTheCorrectLastname(String)"
});
formatter.result({
  "duration": 183215374,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "arne.vanbavel@m2q.be",
      "offset": 45
    }
  ],
  "location": "contactpage.iVerifyThatICanEnterTheCorrectEmail(String)"
});
formatter.result({
  "duration": 271237785,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "I enter the wrong info",
  "description": "",
  "id": "contact-fields;i-enter-the-wrong-info",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "I verify that i can enter the wrong firstname \u003cfirstname\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I verify that i can enter the wrong lastname \u003clastname\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I verify that i can enter the wrong email \u003cemail\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "This is test data",
  "description": "",
  "id": "contact-fields;i-enter-the-wrong-info;this-is-test-data",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "email"
      ],
      "line": 20,
      "id": "contact-fields;i-enter-the-wrong-info;this-is-test-data;1"
    },
    {
      "cells": [
        "",
        "",
        "arne.vanbavel"
      ],
      "line": 21,
      "id": "contact-fields;i-enter-the-wrong-info;this-is-test-data;2"
    },
    {
      "cells": [
        "",
        "",
        "fpqerkfpoqkfp"
      ],
      "line": 22,
      "id": "contact-fields;i-enter-the-wrong-info;this-is-test-data;3"
    },
    {
      "cells": [
        "",
        "",
        "2131414141@"
      ],
      "line": 23,
      "id": "contact-fields;i-enter-the-wrong-info;this-is-test-data;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 25892,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Go to url \"http://www.bignited.be/contact/\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.bignited.be/contact/",
      "offset": 11
    }
  ],
  "location": "contactpage.goToUrl(String)"
});
formatter.result({
  "duration": 998193414,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "I enter the wrong info",
  "description": "",
  "id": "contact-fields;i-enter-the-wrong-info;this-is-test-data;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "I verify that i can enter the wrong firstname ",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I verify that i can enter the wrong lastname ",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I verify that i can enter the wrong email arne.vanbavel",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 46
    }
  ],
  "location": "contactpage.iVerifyThatICanEnterTheWrongFirstnameFirstname(String)"
});
formatter.result({
  "duration": 216081830,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 45
    }
  ],
  "location": "contactpage.iVerifyThatICanEnterTheWrongLastnameLastname(String)"
});
formatter.result({
  "duration": 136670790,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "arne.vanbavel",
      "offset": 42
    }
  ],
  "location": "contactpage.iVerifyThatICanEnterTheWrongEmailEmail(String)"
});
formatter.result({
  "duration": 340549225,
  "status": "passed"
});
formatter.before({
  "duration": 46678,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Go to url \"http://www.bignited.be/contact/\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.bignited.be/contact/",
      "offset": 11
    }
  ],
  "location": "contactpage.goToUrl(String)"
});
formatter.result({
  "duration": 703527985,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "I enter the wrong info",
  "description": "",
  "id": "contact-fields;i-enter-the-wrong-info;this-is-test-data;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "I verify that i can enter the wrong firstname ",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I verify that i can enter the wrong lastname ",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I verify that i can enter the wrong email fpqerkfpoqkfp",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 46
    }
  ],
  "location": "contactpage.iVerifyThatICanEnterTheWrongFirstnameFirstname(String)"
});
formatter.result({
  "duration": 209942207,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 45
    }
  ],
  "location": "contactpage.iVerifyThatICanEnterTheWrongLastnameLastname(String)"
});
formatter.result({
  "duration": 141053057,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fpqerkfpoqkfp",
      "offset": 42
    }
  ],
  "location": "contactpage.iVerifyThatICanEnterTheWrongEmailEmail(String)"
});
formatter.result({
  "duration": 314379977,
  "status": "passed"
});
formatter.before({
  "duration": 52878,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Go to url \"http://www.bignited.be/contact/\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.bignited.be/contact/",
      "offset": 11
    }
  ],
  "location": "contactpage.goToUrl(String)"
});
formatter.result({
  "duration": 745730052,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "I enter the wrong info",
  "description": "",
  "id": "contact-fields;i-enter-the-wrong-info;this-is-test-data;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "I verify that i can enter the wrong firstname ",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I verify that i can enter the wrong lastname ",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I verify that i can enter the wrong email 2131414141@",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 46
    }
  ],
  "location": "contactpage.iVerifyThatICanEnterTheWrongFirstnameFirstname(String)"
});
formatter.result({
  "duration": 197105377,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 45
    }
  ],
  "location": "contactpage.iVerifyThatICanEnterTheWrongLastnameLastname(String)"
});
formatter.result({
  "duration": 136349878,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2131414141@",
      "offset": 42
    }
  ],
  "location": "contactpage.iVerifyThatICanEnterTheWrongEmailEmail(String)"
});
formatter.result({
  "duration": 306707637,
  "status": "passed"
});
formatter.uri("homepage.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# new feature"
    },
    {
      "line": 2,
      "value": "# Tags: optional"
    }
  ],
  "line": 4,
  "name": "Homepage",
  "description": "",
  "id": "homepage",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Check the title of the different pages on the website",
  "description": "",
  "id": "homepage;check-the-title-of-the-different-pages-on-the-website",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am on url \u003cwebsite\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I should see a title that contains \u003ctitle\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "Dummy data",
  "description": "",
  "id": "homepage;check-the-title-of-the-different-pages-on-the-website;dummy-data",
  "rows": [
    {
      "cells": [
        "website",
        "title"
      ],
      "line": 11,
      "id": "homepage;check-the-title-of-the-different-pages-on-the-website;dummy-data;1"
    },
    {
      "cells": [
        "http://m2q.be/nl",
        "M2Q - Software testing"
      ],
      "line": 12,
      "id": "homepage;check-the-title-of-the-different-pages-on-the-website;dummy-data;2"
    },
    {
      "cells": [
        "http://m2q.be/nl/diensten/training-en-coaching",
        "Training en Coaching"
      ],
      "line": 13,
      "id": "homepage;check-the-title-of-the-different-pages-on-the-website;dummy-data;3"
    },
    {
      "cells": [
        "http://m2q.be/nl/vind-een-job-bij-m2q",
        "Vind een job bij M2Q"
      ],
      "line": 14,
      "id": "homepage;check-the-title-of-the-different-pages-on-the-website;dummy-data;4"
    },
    {
      "cells": [
        "http://m2q.be/nl#news",
        "M2Q - Software testing"
      ],
      "line": 15,
      "id": "homepage;check-the-title-of-the-different-pages-on-the-website;dummy-data;5"
    },
    {
      "cells": [
        "http://m2q.be/nl/contact-nl",
        "Contact"
      ],
      "line": 16,
      "id": "homepage;check-the-title-of-the-different-pages-on-the-website;dummy-data;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 31361,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Check the title of the different pages on the website",
  "description": "",
  "id": "homepage;check-the-title-of-the-different-pages-on-the-website;dummy-data;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am on url http://m2q.be/nl",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I should see a title that contains M2Q - Software testing",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://m2q.be/nl",
      "offset": 12
    }
  ],
  "location": "homepage.iAmOnUrlWebsite(String)"
});
formatter.result({
  "duration": 11874108558,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "M2Q - Software testing",
      "offset": 35
    }
  ],
  "location": "homepage.iShouldSeeATitleThatContainsTitle(String)"
});
formatter.result({
  "duration": 7644260,
  "status": "passed"
});
formatter.before({
  "duration": 18963,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Check the title of the different pages on the website",
  "description": "",
  "id": "homepage;check-the-title-of-the-different-pages-on-the-website;dummy-data;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am on url http://m2q.be/nl/diensten/training-en-coaching",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I should see a title that contains Training en Coaching",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://m2q.be/nl/diensten/training-en-coaching",
      "offset": 12
    }
  ],
  "location": "homepage.iAmOnUrlWebsite(String)"
});
formatter.result({
  "duration": 184798781,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Training en Coaching",
      "offset": 35
    }
  ],
  "location": "homepage.iShouldSeeATitleThatContainsTitle(String)"
});
formatter.result({
  "duration": 7248591,
  "status": "passed"
});
formatter.before({
  "duration": 16775,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Check the title of the different pages on the website",
  "description": "",
  "id": "homepage;check-the-title-of-the-different-pages-on-the-website;dummy-data;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am on url http://m2q.be/nl/vind-een-job-bij-m2q",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I should see a title that contains Vind een job bij M2Q",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://m2q.be/nl/vind-een-job-bij-m2q",
      "offset": 12
    }
  ],
  "location": "homepage.iAmOnUrlWebsite(String)"
});
formatter.result({
  "duration": 3442336923,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vind een job bij M2Q",
      "offset": 35
    }
  ],
  "location": "homepage.iShouldSeeATitleThatContainsTitle(String)"
});
formatter.result({
  "duration": 6497366,
  "status": "passed"
});
formatter.before({
  "duration": 21880,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Check the title of the different pages on the website",
  "description": "",
  "id": "homepage;check-the-title-of-the-different-pages-on-the-website;dummy-data;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am on url http://m2q.be/nl#news",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I should see a title that contains M2Q - Software testing",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://m2q.be/nl#news",
      "offset": 12
    }
  ],
  "location": "homepage.iAmOnUrlWebsite(String)"
});
formatter.result({
  "duration": 1158131390,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "M2Q - Software testing",
      "offset": 35
    }
  ],
  "location": "homepage.iShouldSeeATitleThatContainsTitle(String)"
});
formatter.result({
  "duration": 5262951,
  "status": "passed"
});
formatter.before({
  "duration": 14587,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Check the title of the different pages on the website",
  "description": "",
  "id": "homepage;check-the-title-of-the-different-pages-on-the-website;dummy-data;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am on url http://m2q.be/nl/contact-nl",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I should see a title that contains Contact",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://m2q.be/nl/contact-nl",
      "offset": 12
    }
  ],
  "location": "homepage.iAmOnUrlWebsite(String)"
});
formatter.result({
  "duration": 188538860,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contact",
      "offset": 35
    }
  ],
  "location": "homepage.iShouldSeeATitleThatContainsTitle(String)"
});
formatter.result({
  "duration": 8955987,
  "status": "passed"
});
formatter.uri("navigation.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# new feature"
    },
    {
      "line": 2,
      "value": "# Tags: optional"
    }
  ],
  "line": 4,
  "name": "check navigation",
  "description": "",
  "id": "check-navigation",
  "keyword": "Feature"
});
formatter.before({
  "duration": 16045,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "check if all links work",
  "description": "",
  "id": "check-navigation;check-if-all-links-work",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "Go to url \"http://www.bignited.be/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on",
  "rows": [
    {
      "cells": [
        "link1",
        "About"
      ],
      "line": 9
    },
    {
      "cells": [
        "link2",
        "Why b.ignited?"
      ],
      "line": 10
    },
    {
      "cells": [
        "link3",
        "Services"
      ],
      "line": 11
    },
    {
      "cells": [
        "link4",
        "Careers"
      ],
      "line": 12
    },
    {
      "cells": [
        "link5",
        "Contact"
      ],
      "line": 13
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.bignited.be/",
      "offset": 11
    }
  ],
  "location": "contactpage.goToUrl(String)"
});
formatter.result({
  "duration": 2148596304,
  "status": "passed"
});
formatter.match({
  "location": "navigation.iClickOn(String,String\u003e)"
});
formatter.result({
  "duration": 3038668027,
  "status": "passed"
});
});