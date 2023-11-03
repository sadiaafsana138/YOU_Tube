# PHero-tube

## [ Private Repo Link](https://classroom.github.com/a/HIPmbF3j)

Click here for the private repo: [https://classroom.github.com/a/HIPmbF3j](https://classroom.github.com/a/HIPmbF3j)



# API

All category :  - https://openapi.programming-hero.com/api/videos/categories

{
    "status":true,"message":"successfully fetched all the categories",
    "data":
    [
        {"category_id":"1000","category":"All"},
        {"category_id":"1001","category":"Music"},
        {"category_id":"1003","category":"Comedy"},
        {"category_id":"1005","category":"Drawing"}
    ]
}

### ALL data by categoryId
URL Format: - https://openapi.programming-hero.com/api/videos/category/${id}

{
    "status":false,
    "message":"no data found!!!",
    "data":[]
}



Example: - https://openapi.programming-hero.com/api/videos/category/1000

{
    "status": true,
    "message": "successfully fetched all the data from cateogory 1000",
    "data": [
        {
            "category_id": "1001",
            "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
            "title": "Shape of You",
            "authors": [
                {
                    "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
                    "profile_name": "Olivia Mitchell",
                    "verified": ""
                }
            ],
            "others": {
                "views": "100K",
                "posted_date": "16278"
            }
        },
        {
            "category_id": "1001",
            "thumbnail": "https://i.ibb.co/QPNzYVy/moonlight.jpg",
            "title": "Midnight Serenade",
            "authors": [
                {
                    "profile_picture": "https://i.ibb.co/fDbPv7h/Noha.jpg",
                    "profile_name": "Noah Walker",
                    "verified": false
                }
            ],
            "others": {
                "views": "543K",
                "posted_date": ""
            }
        },
        {
            "category_id": "1003",
            "thumbnail": "https://i.ibb.co/NTncwqH/luahg-at-pain.jpg",
            "title": "Laugh at My Pain",
            "authors": [
                {
                    "profile_picture": "https://i.ibb.co/XVHM7NP/kevin.jpg",
                    "profile_name": "Kevin Hart",
                    "verified": false
                }
            ],
            "others": {
                "views": "1.1K",
                "posted_date": "13885"
            }
        },
        {
            "category_id": "1001",
            "thumbnail": "https://i.ibb.co/f9FBQwz/smells.jpg",
            "title": "Smells Like Teen Spirit",
            "authors": [
                {
                    "profile_picture": "https://i.ibb.co/k4tkc42/oliviar-harris.jpg",
                    "profile_name": "Oliver Harris",
                    "verified": true
                }
            ],
            "others": {
                "views": "5.4K",
                "posted_date": "1672656000"
            }
        },
        {
            "category_id": "1003",
            "thumbnail": "https://i.ibb.co/Yc4p5gD/inside-amy.jpg",
            "title": "Inside Amy Schumer",
            "authors": [
                {
                    "profile_picture": "https://i.ibb.co/YD2mqH7/amy.jpg",
                    "profile_name": "Amy Schumer",
                    "verified": ""
                }
            ],
            "others": {
                "views": "3.6K",
                "posted_date": "15147"
            }
        },
        {
            "category_id": "1003",
            "thumbnail": "https://i.ibb.co/5LRQkKF/stick-and-stones.jpg",
            "title": "Sticks & Stones",
            "authors": [
                {
                    "profile_picture": "https://i.ibb.co/rdTZrCM/dev.jpg",
                    "profile_name": "Dave Chappelle",
                    "verified": true
                }
            ],
            "others": {
                "views": "113K",
                "posted_date": ""
            }
        },
        {
            "category_id": "1001",
            "thumbnail": "https://i.ibb.co/DRxB1Wm/sunris.jpg",
            "title": "Sunrise Reverie",
            "authors": [
                {
                    "profile_picture": "https://i.ibb.co/yQFJ42h/ava.jpg",
                    "profile_name": "Ava Johnson",
                    "verified": false
                }
            ],
            "others": {
                "views": "1.1K",
                "posted_date": "16950"
            }
        },
        {
            "category_id": "1001",
            "thumbnail": "https://i.ibb.co/hY496Db/coloer-of-the-wind.jpg",
            "title": "Colors of the Wind",
            "authors": [
                {
                    "profile_picture": "https://i.ibb.co/6r4cx4P/ethen-clack.png",
                    "profile_name": "Ethan Clark",
                    "verified": true
                }
            ],
            "others": {
                "views": "233K",
                "posted_date": "16090"
            }
        },
        {
            "category_id": "1003",
            "thumbnail": "https://i.ibb.co/kc8CCFs/30-rock.png",
            "title": "30 Rock",
            "authors": [
                {
                    "profile_picture": "https://i.ibb.co/YZN9rQZ/tina.jpg",
                    "profile_name": "Tina Fey",
                    "verified": false
                }
            ],
            "others": {
                "views": "4.5K",
                "posted_date": "14800"
            }
        },
        {
            "category_id": "1003",
            "thumbnail": "https://i.ibb.co/xgWL3vQ/kid-gorgeous.jpg",
            "title": "Kid Gorgeous",
            "authors": [
                {
                    "profile_picture": "https://i.ibb.co/xsfkwN2/john.jpg",
                    "profile_name": "John Mulaney",
                    "verified": true
                }
            ],
            "others": {
                "views": "241K",
                "posted_date": ""
            }
        },
        {
            "category_id": "1003",
            "thumbnail": "https://i.ibb.co/ZNggzdm/cake.jpg",
            "title": "Beyond The Pale",
            "authors": [
                {
                    "profile_picture": "https://i.ibb.co/MZ2vbXR/jimm.jpg",
                    "profile_name": "Jim Gaffigan",
                    "verified": false
                }
            ],
            "others": {
                "views": "2.6K",
                "posted_date": "15400"
            }
        },
        {
            "category_id": "1001",
            "thumbnail": "https://i.ibb.co/hdtZYbB/enchnting.jpg",
            "title": "Enchanted Harmonies",
            "authors": [
                {
                    "profile_picture": "https://i.ibb.co/jh1q2F3/shopia.jpg",
                    "profile_name": "Sophia Williams",
                    "verified": false
                }
            ],
            "others": {
                "views": "7.6K",
                "posted_date": "16450"
            }
        }
    ]
}

## Blog Questions

- Discuss the scope of `var`, `let`, and `const`
- Tell us the use cases of `null` and `undefined`
- What do you mean by REST API?


