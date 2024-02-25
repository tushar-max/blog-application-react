import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllData } from '../features/postsSlice';
import View from './View';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { posts, loading } = useSelector((state) => state.app);

    const [ id, setId ] = useState();
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        dispatch(fetchAllData())
    }, [])

    const handleAddPost = ()=>navigate("/addPost")

    if (!posts || posts.length==0) {
        return <div className='container mt-3'>
            <h2>No Blogs found!</h2>
            <h4><button className='btn btn-success' onClick={handleAddPost}>Create a new Blogpost</button></h4>
        </div>
    }
    return (
        
        <div className='container mt-3'>
            {showPopup && <View id={id} showPopup={showPopup} setShowPopup={setShowPopup}/>}
            {!showPopup && <div className="row w-80">
                {posts && posts.map((post, index) => (
                    <div className="col-sm-6 my-2" key={index}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title text-center">{post.title}</h5>
                                <hr />
                                <h6 className="card-subtitle mb-2 my-2 text-body-secondary"><b className='text-black'>Category: </b>{post.category}</h6>
                                <p className="card-text "><b className='text-black'>Description: </b>{post.description.slice(0,100)}...</p>
                                <a className="card-link float-end" onClick={()=>[setId(index), setShowPopup(true)]}>...more</a>
                                {/* <a href="/" className="card-link">Another link</a> */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>}
        </div>
    )
}

export default Home