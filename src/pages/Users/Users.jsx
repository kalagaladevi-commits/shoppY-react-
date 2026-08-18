import { useState, useEffect, useMemo, useCallback } from "react";
import axios from "axios";
import Loader from "../../components/Loader/Loader";
import { API_ENDPOINTS } from "../../services/api";
import "./Users.css";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editData, setEditData] = useState({
    id: "",
    name: "",
    email: "",
    age: "",
  });

  // Fetch Users
  useEffect(() => {
    async function getUsers() {
      setLoading(true);
      try {
        const { data } = await axios.get(API_ENDPOINTS.users);
        setUsers(data.users || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    getUsers();
  }, []);

  // Filter Users
  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      user.firstName?.toLowerCase().includes(search.toLowerCase())
    );
  }, [users, search]);

  // Edit User
  const editUser = useCallback((user) => {
    setEditData({
      id: user.id,
      name: user.firstName,
      email: user.email,
      age: user.age,
    });
    setEditModalOpen(true);
  }, []);

  // Delete User
  const deleteUser = useCallback(async (userId) => {
    try {
      await axios.delete(`${API_ENDPOINTS.users}/${userId}`);
    } catch {
      // Continue local update
    }
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  }, []);

  // Update Handler
  const handleUpdate = (e) => {
    e.preventDefault();
    setUsers((prev) =>
      prev.map((u) =>
        u.id === editData.id
          ? { ...u, firstName: editData.name, email: editData.email, age: editData.age }
          : u
      )
    );
    setEditModalOpen(false);
  };

  return (
    <div className="users-page-container container py-5">
      {/* Header */}
      <div className="users-header-row mb-4">
        <div>
          <div className="eyebrow-tag">
            <span>ADMIN DIRECTORY</span>
          </div>
          <h1 className="font-display users-main-title">Users List</h1>
          <p className="users-sub-title">Manage registered accounts, credentials, and user data.</p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="users-search-card mb-4">
        <div className="users-search-wrap">
          <i className="bi bi-search search-icon"></i>
          <input
            type="search"
            placeholder="Search By First Name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="users-search-input"
          />
        </div>
      </div>

      {/* Table Container */}
      <div className="users-table-card">
        {loading ? (
          <div className="py-5">
            <Loader />
          </div>
        ) : (
          <>
            <div className="table-responsive">
              <table className="luxury-users-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>AGE</th>
                    <th>EDIT</th>
                    <th>DELETE</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map((user) => (
                    <tr key={user.id}>
                      <td className="font-mono text-muted">#{user.id}</td>
                      <td>
                        <div className="user-profile-badge">
                          <span className="user-avatar-initial">
                            {user.firstName?.charAt(0)}
                          </span>
                          <span className="user-full-name fw-bold text-white">
                            {user.firstName} {user.lastName || ""}
                          </span>
                        </div>
                      </td>
                      <td className="font-mono text-secondary">{user.email}</td>
                      <td className="font-mono">{user.age}</td>
                      <td>
                        <button
                          type="button"
                          className="btn-table-action btn-edit"
                          onClick={() => editUser(user)}
                          title="Edit User"
                        >
                          <i className="bi bi-pencil-square"></i>
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn-table-action btn-delete"
                          onClick={() => deleteUser(user.id)}
                          title="Delete User"
                        >
                          <i className="bi bi-trash3"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredUsers.length === 0 && (
              <div className="text-center py-5">
                <p className="text-muted mb-0">No users found matching your search.</p>
              </div>
            )}
          </>
        )}
      </div>

      {/* Edit User Modal / Drawer */}
      {editModalOpen && (
        <div className="luxury-modal-overlay" onClick={() => setEditModalOpen(false)}>
          <div className="luxury-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header-row mb-4">
              <h4 className="font-display text-white mb-0">Edit User Details</h4>
              <button
                className="modal-close-btn"
                onClick={() => setEditModalOpen(false)}
                aria-label="Close"
              >
                <i className="bi bi-x-lg"></i>
              </button>
            </div>

            <form onSubmit={handleUpdate} className="edit-user-form">
              <div className="form-field-group mb-3">
                <label>FIRST NAME</label>
                <input
                  type="text"
                  required
                  value={editData.name}
                  onChange={(e) =>
                    setEditData({ ...editData, name: e.target.value })
                  }
                />
              </div>

              <div className="form-field-group mb-3">
                <label>EMAIL ADDRESS</label>
                <input
                  type="email"
                  required
                  value={editData.email}
                  onChange={(e) =>
                    setEditData({ ...editData, email: e.target.value })
                  }
                />
              </div>

              <div className="form-field-group mb-4">
                <label>AGE</label>
                <input
                  type="number"
                  required
                  value={editData.age}
                  onChange={(e) =>
                    setEditData({ ...editData, age: e.target.value })
                  }
                />
              </div>

              <div className="d-flex justify-content-end gap-2">
                <button
                  type="button"
                  className="btn-luxury-secondary"
                  onClick={() => setEditModalOpen(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn-luxury-primary">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
