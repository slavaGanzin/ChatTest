Feature Chat

Scenario: 1
  Given @chris you around?
  Then { "mentions": [ "chris" ] }

Scenario: 2
  Given Good morning! (megusta) (coffee)
  Then { "emoticons": [ "megusta", "coffee" ] }

Scenario: 3
  Given Olympics are starting soon; http://www.nbcolympics.com
  Then { "links": [ { "url": "http://www.nbcolympics.com", "title": "2018 PyeongChang Olympic Games | NBC Olympics" } ] }
  
  
  
Scenario: 4
  Given  @bob @john (success) such a cool feature; https://twitter.com/jdorfman/status/430511497475670016
  Then { "mentions": [ "bob", "john" ], "emoticons": [ "success" ], "links": [ { "url": "https://twitter.com/jdorfman/status/430511497475670016", "title": "Justin Dorfman; on Twitter: \"nice @littlebigdetail from @HipChat (shows hex colors when pasted in chat). http://t.co/7cI6Gjy5pq\"" } ] }
