import { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"; 
// Import các công cụ chuyển trang của React Router DOM
import { BrowserRouter as Router, Routes, Route, useParams, useNavigate, Link } from "react-router-dom";

// =================================================================
// 1. COMPONENT TRANG DANH SÁCH (Chứa toàn bộ logic CRUD + Search cũ)
// =================================================================
function PostList() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [editId, setEditId] = useState(null); 
  const [searchTerm, setSearchTerm] = useState(""); 

  useEffect(() => {
    axios.get("http://localhost:9999/posts")
      .then((response) => setPosts(response.data))
      .catch((error) => console.log("Lỗi không lấy được data:", error));
  }, []); 

  const handleDelete = (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xoá bài viết này không?")) {
      axios.delete(`http://localhost:9999/posts/${id}`)
        .then(() => {
          setPosts(posts.filter((post) => post.id !== id));
          alert("Xoá thành công!");
        })
        .catch((error) => alert("Xoá thất bại!"));
    }
  };

  const handleEditClick = (post) => {
    setEditId(post.id);
    setTitle(post.title);
    setAuthor(post.author);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "" || author.trim() === "") {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }
    const postData = { title, author };

    if (editId !== null) {
      axios.put(`http://localhost:9999/posts/${editId}`, postData)
        .then((response) => {
          setPosts(posts.map((post) => post.id === editId ? response.data : post));
          setEditId(null);
          setTitle("");
          setAuthor("");
          alert("Cập nhật thành công!");
        });
    } else {
      axios.post("http://localhost:9999/posts", postData)
        .then((response) => {
          setPosts([...posts, response.data]);
          setTitle("");
          setAuthor("");
          alert("Thêm mới thành công!");
        });
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-primary mb-4 text-center">Quản Lý Bài Viết (FER202)</h2>

      {/* FORM THÊM / SỬA */}
      <form onSubmit={handleSubmit} className="mb-4 p-4 border rounded shadow-sm bg-light">
        <h4 className="mb-3">{editId ? "✏️ Sửa Bài Viết" : "📝 Thêm Bài Viết Mới"}</h4>
        <div className="row">
          <div className="col-md-5">
            <input type="text" className="form-control" placeholder="Nhập tiêu đề..." value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="col-md-5">
            <input type="text" className="form-control" placeholder="Nhập tác giả..." value={author} onChange={(e) => setAuthor(e.target.value)} />
          </div>
          <div className="col-md-2">
            <button type="submit" className={`btn w-100 ${editId ? "btn-warning" : "btn-primary"}`}>{editId ? "Cập Nhật" : "Thêm Mới"}</button>
          </div>
        </div>
      </form>

      {/* Ô TÌM KIẾM */}
      <div className="mb-3">
        <input type="text" className="form-control border-primary" placeholder="🔍 Tìm kiếm bài viết theo Title..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      </div>

      {/* BẢNG DANH SÁCH */}
      <div className="table-responsive">
        <table className="table table-hover table-bordered table-striped text-center align-middle">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Author</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {posts
              .filter((post) => post.title.toLowerCase().includes(searchTerm.toLowerCase()))
              .map((post) => (
                <tr key={post.id}>
                  <td>{post.id}</td>
                  <td>{post.title}</td>
                  <td>{post.author}</td>
                  <td>
                    {/* NÚT DETAIL: Dùng thẻ Link để nhảy sang trang chi tiết kèm theo ID bài viết */}
                    <Link to={`/posts/${post.id}`} className="btn btn-info btn-sm text-white me-2">
                      Detail
                    </Link>
                    <button className="btn btn-warning btn-sm me-2" onClick={() => handleEditClick(post)}>Edit</button>
                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(post.id)}>Delete</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// =================================================================
// 2. COMPONENT TRANG CHI TIẾT (Trang hiển thị thông tin cụ thể)
// =================================================================
function PostDetail() {
  const { id } = useParams(); // Lấy cái ID từ trên thanh URL xuống (ví dụ: /posts/1 -> lấy được số 1)
  const [post, setPost] = useState(null);
  const navigate = useNavigate(); // Dùng để chuyển hướng trang bằng code (hàm quay lại)

  useEffect(() => {
    // Gọi API lấy riêng chi tiết của 1 thằng dựa theo ID
    axios.get(`http://localhost:9999/posts/${id}`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        console.log("Lỗi lấy chi tiết:", error);
      });
  }, [id]);

  // Nếu API chưa trả về dữ liệu kịp thì hiện chữ Đang tải
  if (!post) {
    return <div className="container mt-4 text-center"><h5>🔄 Đang tải chi tiết bài viết...</h5></div>;
  }

  return (
    <div className="container mt-5">
      <div className="card shadow mx-auto" style={{ maxWidth: "600px" }}>
        <div className="card-header bg-info text-white">
          <h4 className="mb-0">📄 Chi Tiết Bài Viết (ID: {post.id})</h4>
        </div>
        <div className="card-body fs-5">
          <p><strong>Tiêu đề bài viết:</strong> {post.title}</p>
          <p><strong>Tác giả xuất bản:</strong> {post.author}</p>
          
          <hr />
          {/* NÚT QUAY LẠI: Click vào sẽ quay ngược về trang chủ "/" */}
          <button className="btn btn-secondary mt-2" onClick={() => navigate("/")}>
            ⬅️ Quay lại danh sách
          </button>
        </div>
      </div>
    </div>
  );
}
// =================================================================
// COMPONENT HEADER (Thanh Menu Điều Hướng)
// =================================================================
function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className="container">
        {/* Dùng thẻ Link thay cho thẻ <a> để không bị reload lại web */}
        <Link className="navbar-brand" to="/">🔥 FPTU Blog</Link>
        <div className="navbar-nav">
          <Link className="nav-link" to="/">Trang chủ (Home)</Link>
          <Link className="nav-link" to="/about">Giới thiệu (About)</Link>
        </div>
      </div>
    </nav>
  );
}

// =================================================================
// COMPONENT TRANG ABOUT (Trang phụ làm mẫu)
// =================================================================
function About() {
  return (
    <div className="container mt-5 text-center">
      <h3>🚀 Về chúng tôi</h3>
      <p>Đây là trang giới thiệu. Ông có thể tạo thêm trang Contact, Profile tuỳ ý bằng cách này.</p>
    </div>
  );
}
// =================================================================
// 3. COMPONENT GỐC APP (Cấu hình định tuyến Router)
// =================================================================
function App() {
  return (
<Router>
      {/* Đặt Header ở đây, ngoài Routes để trang nào cũng hiển thị Menu */}
      <Header />
      
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;