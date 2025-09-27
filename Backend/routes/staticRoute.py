from flask import Blueprint, request, jsonify
from model.blog import Blog

static_bp = Blueprint("static_bp", __name__)

# Get all blogs
@static_bp.route("/api/auth/getblogs", methods=["GET"])
def get_blogs():
    try:
        blogs = Blog.objects()
        # print(blogs)
        if not blogs:
            return jsonify({"blogs": []})
        
        # Convert each blog to dict
        blogs_list = [blog.to_mongo().to_dict() for blog in blogs]
        for blog in blogs_list:
            blog["_id"] = str(blog["_id"])  # convert ObjectId to string

        return jsonify({"blogs": blogs_list})
    except Exception as e:
        # print("Error in get_blogs:", str(e))
        return jsonify({"blogs": False, "error": str(e)}), 400


# Delete blog
@static_bp.route("/api/delete/blog", methods=["POST"])
def delete_blog():
    try:
        data = request.json
        blog_id = data.get("blogId")

        blog = Blog.objects(id=blog_id).first()
        if not blog:
            return jsonify({"delete": False})

        blog.delete()
        return jsonify({"delete": True})
    except Exception as e:
        return jsonify({"delete": False, "error": str(e)}), 400
