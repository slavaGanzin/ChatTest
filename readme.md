Please, write Python code that takes a chat message string and returns a JSON string containing information about its contents.

# Definition of done
This test project will be accepted if `npm test` will successfully run on all 4 tests!

So you need to install nodejs/npm to run this task!
**But all your code shoud be in `test.py`!**




### Special content to look for includes:

1. @mentions - A way to mention a user. Always starts with an '@' and ends when
hitting a non-word character.
(http://help.hipchat.com/knowledgebase/articles/64429-how-do-mentions-work-)

2. Emoticons - For this exercise, you only need to consider 'custom' emoticons which
are alphanumeric strings, no longer than 15 characters, contained in parenthesis. You
can assume that anything matching this format is an emoticon.
(https://www.hipchat.com/emoticons)

3. Links - Any URLs contained in the message, along with the page's title.

For example, calling your function with the following inputs should result in the
corresponding return values.

Input: "@chris you around?"
```
Return (string):
{
  "mentions": [
    "chris"
  ]
}
```

Input: "Good morning! (megusta) (coffee)"
```
Return (string):
{
  "emoticons": [
    "megusta",
    "coffee"
  ]
}
```

Input: "Olympics are starting soon; http://www.nbcolympics.com"
```
Return (string):
{
  "links": [
    {
      "url": "http://www.nbcolympics.com",
      "title": "NBC Olympics | 2014 NBC Olympics in Sochi Russia"
    }
  ]
}
```

Input: "@bob @john (success) such a cool feature;
https://twitter.com/jdorfman/status/430511497475670016"
```
Return (string):
{
  "mentions": [
    "bob",
    "john"
  ],
  "emoticons": [
    "success"
  ],
  "links": [
    {
      "url": "https://twitter.com/jdorfman/status/430511497475670016",
      "title": "Twitter / jdorfman: nice @littlebigdetail from ..."
    }
  ]
}
```
