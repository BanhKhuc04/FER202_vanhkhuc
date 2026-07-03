import './App.css';
import { useEffect, useState } from 'react';
import { create } from 'axios';
const axios = create();

const API_URL = 'http://localhost:9999/posts';

function App() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [editingId, setEditingId] = useState(null); // Lưu ID của bài viết đang sửa

  // 1. READ: Lấy danh sách bài viết
  const getPosts = async () => {
    try {
      const response = await axios.get(API_URL);
      setPosts(response.data);
    } catch (error) {
      console.error('Lỗi khi tải dữ liệu:', error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  // 2. CREATE & UPDATE: Xử lý submit form
  const handleSubmit = async (e) => {
    e.preventDefault(); // Ngăn load lại trang
    if (!title || !author) {
      alert('Vui lòng nhập đầy đủ Tiêu đề và Tên tác giả!');
      return;
    }

    try {
      if (editingId) {
        // Nếu đang có editingId -> Gọi API PUT để Cập nhật
        await axios.put(`${API_URL}/${editingId}`, { title, author });
        setEditingId(null); // Reset lại trạng thái
      } else {
        // Nếu không -> Gọi API POST để Thêm mới
        await axios.post(API_URL, { title, author });
      }
      
      // Reset form và tải lại danh sách
      setTitle('');
      setAuthor('');
      getPosts();
    } catch (error) {
      console.error('Lỗi khi lưu bài viết:', error);
    }
  };

  // 3. EDIT: Đưa dữ liệu lên form để chuẩn bị sửa
  const handleEdit = (post) => {
    setTitle(post.title);
    setAuthor(post.author);
    setEditingId(post.id);
  };

  // 4. DELETE: Xóa bài viết
  const handleDelete = async (id) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa bài viết này không?')) {
      try {
        await axios.delete(`${API_URL}/${id}`);
        getPosts(); // Tải lại danh sách sau khi xóa
      } catch (error) {
        console.error('Lỗi khi xóa bài viết:', error);
      }
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '800px' }}>
      <h2 className="fw-bold mb-4">
        📝 Quản lý bài viết (React + JSON Server)
      </h2>

      {/* FORM THÊM/SỬA BÀI VIẾT */}
      <h5 className="fw-bold mb-3">
        {editingId ? 'Cập nhật bài viết' : 'Thêm bài viết mới'}
      </h5>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Tiêu đề bài viết..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Tên tác giả..."
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button type="submit" className={editingId ? 'btn btn-success' : 'btn btn-primary'}>
          {editingId ? 'Cập nhật' : 'Thêm mới'}
        </button>
        {editingId && (
          <button 
            type="button" 
            className="btn btn-secondary ms-2" 
            onClick={() => {
              setEditingId(null);
              setTitle('');
              setAuthor('');
            }}
          >
            Hủy
          </button>
        )}
      </form>

      <hr className="my-4" />

      {/* DANH SÁCH BÀI VIẾT */}
      <h5 className="fw-bold mb-3">Danh sách bài viết hiện có</h5>
      
      <div className="list-group">
        {posts.map((post) => (
          <div 
            key={post.id} 
            className="list-group-item d-flex justify-content-between align-items-center mb-2 border rounded"
          >
            <div>
              <strong>{post.title}</strong> - Tác giả: {post.author} (ID: {post.id})
            </div>
            <div>
              <button 
                className="btn btn-warning btn-sm me-2 text-white fw-semibold"
                onClick={() => handleEdit(post)}
              >
                Sửa
              </button>
              <button 
                className="btn btn-danger btn-sm fw-semibold"
                onClick={() => handleDelete(post.id)}
              >
                Xóa
              </button>
            </div>
          </div>
        ))}
        {posts.length === 0 && (
          <div className="alert alert-info text-center">Chưa có bài viết nào!</div>
        )}
      </div>
    </div>
  );
}

export default App;