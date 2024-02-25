import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deletePost, likeActionofPost } from '../features/postsSlice';
import { useNavigate } from 'react-router-dom';

const View = ({ id, showPopup, setShowPopup }) => {
    const { posts } = useSelector((state) => state.app);
    let post = posts[id];
    // const [like,setLike] = useState(post.like);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleDelete = (e)=>{
        e.preventDefault();
        dispatch(deletePost(id));
        setShowPopup(false);
    };
    const handleEdit = ()=>{
        navigate(`/edit/${id}`);
    }

    const handleLikeFeature = ()=>{
        // console.log("Handle like Clicked");
        // setLike(!post.like);
        dispatch(likeActionofPost(id));
        // console.log(post.like);
    }

    return (
        <>
            {post &&<div className='container mt-3'>
                    <h2 className="card-title text-center">{id+1}.{post.title}</h2>
                    <hr />
                    {post.like && <button className="mx-2 btn btn-secondary" onClick={handleLikeFeature}>UnLike</button>}
                    {!post.like && <button className="btn btn-primary mx-2" onClick={handleLikeFeature}>Like</button>}
                    <button onClick={handleEdit} className="btn btn-warning mx-2">Edit</button>
                    <a className="btn btn-info mx-2" onClick={()=>setShowPopup(false)}>Close</a>
                    <a className="btn btn-danger mx-2 float-end" onClick={handleDelete}>Delete Post</a>
                    <h4 className="card-subtitle mb-2 my-2 text-body-secondary"><b className='text-black'>Category: </b>{post.category}</h4>
                    <h4 className="card-subtitle mb-2 my-3 text-body-secondary"><b className='text-black'>Description: </b></h4>
                    <pre className="card-text text-font">{post.description}</pre>
            </div>}
            {!post &&
            <h1>No blogs found</h1>}
        </>
    )
}

export default View