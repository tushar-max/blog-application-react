import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createBlog } from '../features/postsSlice';
import { useNavigate } from 'react-router-dom';


export const Create = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [blogData, setBlogData] = useState({});


    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(blogData);
        if (blogData.length == 0 || blogData.title == "" || blogData.category == "" || blogData.description == "" || !blogData.title || !blogData.category || !blogData.description) {
            alert("Please Complete the blog first");
        }
        else {
            dispatch(createBlog(blogData));
            navigate("/");
        }

    };
    const getBlogData = (e) => {
        // setBlogData({...blogData,["like"]:false});
        setBlogData({ ...blogData, [e.target.name]: e.target.value })
    };

    // console.log(blogData);

    return (
        <div className='container mt-3'>
            <h3>Add Post</h3>
            <form className='w-50' onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input type="text" className="form-control" name='title' placeholder="Title" onChange={getBlogData} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Category</label>
                    <input type="text" className="form-control" name='category' placeholder="Category" onChange={getBlogData} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea className="form-control" name='description' rows="3" onChange={getBlogData}></textarea>
                </div>
                <button className="btn btn-primary" type='submit'>Submit</button>
            </form>
        </div>
    )
}
