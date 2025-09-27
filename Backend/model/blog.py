from mongoengine import Document, StringField

class Blog(Document):
    title = StringField(required=True)
    imgUrl = StringField(required=True)
    content = StringField(required=True)
    blogType = StringField(required=True)
    summary = StringField(required=True)
    userName = StringField(required=True)

    meta = {
        'collection': 'blogs',  # same as mongoose.model("blog")
        'strict': False  # <<< allow extra fields like __v
    }
