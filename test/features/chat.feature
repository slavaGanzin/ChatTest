Feature Chat

Scenario: 1
  Given "@chris you around?"
  Then { "mentions": [ "chris" ] }

Scenario: 2
  Given "Good morning! (megusta) (coffee)"
  Then { "emoticons": [ "megusta", "coffee" ] }

Scenario: 3
  Given "Olympics are starting soon; http://www.nbcolympics.com"
  Then { "links": [ { "url": "http://www.nbcolympics.com", "title": "NBC Olympics | 2014 NBC Olympics in Sochi Russia" } ] }
  
  
  
Scenario: 4
  Given  "@bob @john (success) such a cool feature; https://twitter.com/jdorfman/status/430511497475670016"
  Then { "mentions": [ "bob", "john" ], "emoticons": [ "success" ], "links": [ { "url": "https://twitter.com/jdorfman/status/430511497475670016", "title": "Twitter / jdorfman: nice @littlebigdetail from ..." } ] }
