"use client";
import useSWR, { useSWRConfig } from "swr";
import Link from "next/link";
import Image from "next/image";
import API from "@/utils/api";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const fetcher = (url) => API.get(url).then((r) => r.data?.data || []);

const ControllerDashboard = () => {
  const { mutate } = useSWRConfig();
  const { data: stories = [], isLoading } = useSWR("/patient-stories", fetcher);

  const handleDelete = async (id) => {
    const ok = window.confirm("Delete this story permanently?");
    if (!ok) return;
    try {
      await API.delete(`/patient-stories/${id}`);
      await mutate("/patient-stories"); // revalidate everywhere
    } catch (e) {
      alert(e?.response?.data?.message || "Failed to delete story");
    }
  };

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Patient Stories</h1>
        <Link href="/controller/add-patient-story">
          <button className="dashboard-btn">+ Add Patient Story</button>
        </Link>
      </div>

      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : stories.length === 0 ? (
        <div className="empty">No patient stories yet.</div>
      ) : (
        <div className="cards-grid">
          {stories.map((p) => (
            <div className="card" key={p._id}>
              <div className="card-image">
                <Image
                  src={p.image || "/assets/images/patient.png"}
                  alt={p.name}
                  width={800}
                  height={600}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              <div className="card-content">
                <h3>{p.name}</h3>
                {p.diagnosis && <p className="diagnosis">{p.diagnosis}</p>}
                {p.location && (
                  <p className="location">
                    <FontAwesomeIcon className="loc-icon" icon={faLocationDot} />
                    {p.location}
                  </p>
                )}
                {p.story && <blockquote className="quote">“{p.story}”</blockquote>}
              </div>

              <div className="card-actions">
                <Link href={`/stories/${p._id}`} className="card-link">
                  Read Full Story
                </Link>
                <button className="delete-btn" onClick={() => handleDelete(p._id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <style jsx>{`
        .dashboard-wrapper {
          max-width: 1200px;
          margin: 2rem auto;
          padding: 1.5rem;
          background: #fff;
          border-radius: 1rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }

        .dashboard-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .dashboard-title {
          font-size: 1.8rem;
          font-weight: 600;
          color: #333;
        }

        .dashboard-btn {
          background: #e12454;
          color: #fff;
          border: none;
          padding: 0.6rem 1.2rem;
          border-radius: 2rem;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.2s;
        }
        .dashboard-btn:hover {
          background: #c81e3a;
        }

        .loading,
        .empty {
          text-align: center;
          padding: 2rem;
          color: #666;
        }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .card {
          background: #fff;
          border-radius: 48px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .card-image {
          height: 296px;
        }
        .card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .card-content {
          padding: 1.25rem;
        }
        .card-content h3 {
          margin: 0;
          color: #002568;
          font-size: 1.2rem;
          font-weight: 600;
        }
        .diagnosis {
          margin: 0.25rem 0;
          color: #e91e63;
          font-weight: 600;
        }
        .location {
          margin: 0.25rem 0;
          display: flex;
          align-items: center;
          color: #555;
        }
        .loc-icon {
          margin-right: 8px;
        }
        .quote {
          margin: 0.75rem 0 0;
          font-style: italic;
          color: #333;
          border-left: 4px solid #e91e63;
          padding-left: 12px;
        }

        .card-actions {
          padding: 0 1.25rem 1.25rem;
        }
        .card-link {
          color: #e91e63;
          text-decoration: none;
          font-weight: bold;
          border: 1px solid #e91e63;
          border-radius: 30px;
          padding: 10px 20px;
          background-color: white;
          display: inline-block;
          transition: color 0.2s, border-color 0.2s;
        }
        .card-link:hover {
          color: #c81e3a;
          border-color: #c81e3a;
        }

        .delete-btn {
          margin-left: 8px;
          color: #e12454;
          background: #fff;
          border: 1px solid #e12454;
          border-radius: 30px;
          padding: 10px 20px;
          cursor: pointer;
          font-weight: 600;
          transition: color 0.2s, background 0.2s, border-color 0.2s;
        }
        .delete-btn:hover {
          color: #fff;
          background: #e12454;
          border-color: #e12454;
        }
      `}</style>
    </div>
  );
};

export default ControllerDashboard;