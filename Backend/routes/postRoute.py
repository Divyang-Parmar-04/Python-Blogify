from flask import Blueprint, request, jsonify
from model.blog import Blog

post_bp = Blueprint("post_bp", __name__)

# Create blog
@post_bp.route("/api/createblog", methods=["POST"])
def create_blog():
    try:
        data = request.json
        blog = Blog(
            title=data.get("title"),
            imgUrl=data.get("imgUrl"),
            content=data.get("content"),
            blogType=data.get("blogType"),
            summary=data.get("summary"),
            userName=data.get("userName")
        )
        blog.save()
        new_blog = blog.to_mongo().to_dict()
        new_blog["_id"] = str(new_blog["_id"])  # Convert ObjectId to string

        return jsonify({"blog": new_blog}), 201
  
    except Exception as e:
        return jsonify({"blog": False, "error": str(e)}), 400


# Update blog
@post_bp.route("/api/updateblog", methods=["POST"])
def update_blog():
    try:
        data = request.json
        blog_id = data.get("blogId")

        blog = Blog.objects(id=blog_id).first()
        if not blog:
            return jsonify({"blog": False})

        blog.update(
            title=data.get("title"),
            imgUrl=data.get("imgUrl"),
            summary=data.get("summary"),
            blogType=data.get("blogType"),
            content=data.get("content")
        )
        blog.reload()
        return jsonify({"blog": blog.to_json()})
    except Exception as e:
        return jsonify({"blog": False, "error": str(e)}), 400


# Delete blog
@post_bp.route("/api/deleteblog", methods=["POST"])
def delete_blog():
    try:
        data = request.json
        blog_id = data.get("id")

        blog = Blog.objects(id=blog_id).first()
        if not blog:
            return jsonify({"blog": False})

        blog.delete()
        return jsonify({"blog": True})
    except Exception as e:
        return jsonify({"blog": False, "error": str(e)}), 400
