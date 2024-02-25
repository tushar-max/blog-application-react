import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getPostById, updateBlog } from '../features/postsSlice';

const EditBlog = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [updateData, setUpdateData] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            dispatch(getPostById(id));
        }
    }, [id,dispatch]);
    const {posts} = useSelector((state)=>state.app);

    useEffect(() => {
        if (posts) {
            setUpdateData(posts[0]);
        }
    }, [posts]);
    
    const handleUpdate = (e)=>{
        e.preventDefault();
        const data = {id:id, data:updateData}
        dispatch(updateBlog(data));
        navigate("/");
    };

    const getUpdateData = (e)=>{
        setUpdateData({...updateData,[e.target.name]:e.target.value});
    };
    console.log(updateData);
    return (
        <div className='container mt-3'>
            <h3>Edit the Blogpost</h3>
            <form className='w-50' onSubmit={handleUpdate}>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input type="text" className="form-control" name='title' value={updateData && updateData.title} placeholder="Title" onChange={getUpdateData}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Category</label>
                    <input type="text" className="form-control" name='category' value={updateData && updateData.category} placeholder="Category" onChange={getUpdateData}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea className="form-control" name='description' value={updateData && updateData.description} rows="3" onChange={getUpdateData}></textarea>
                </div>
                <button className="btn btn-primary" type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default EditBlog