import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../contexts/ShopContext";
import axios from "axios";

const Profile = () => {
  const { token, backendUrl } = useContext(ShopContext);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUserProfile = async () => {
    try {
      const response = await axios.get(
        backendUrl + "/api/user/profile",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("PROFILE API 👉", response.data);

      if (response.data.success) {
        setUser(response.data.user);
      }
    } catch (error) {
      console.log("PROFILE ERROR 👉", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) fetchUserProfile();
  }, [token]);

  if (loading) {
    return (
      <div className="text-center py-20 text-gray-500">
        Loading profile...
      </div>
    );
  }

  if (!user) {
    return (
      <div className="text-center py-20 text-gray-500">
        Unable to load profile
      </div>
    );
  }

  return (
    <div className="border-t pt-14 pb-24">
      <h2 className="text-2xl font-semibold text-center mb-12">
        My Profile
      </h2>

      <div className="max-w-xl mx-auto border p-8">
        <h3 className="text-lg font-medium mb-6">
          ACCOUNT INFORMATION
        </h3>

        <div className="space-y-4">
          <div>
            <label className="text-sm text-gray-600">Name</label>
            <input
              value={user.name || ""}
              disabled
              className="w-full border px-4 py-2 mt-1 bg-gray-100"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Email</label>
            <input
              value={user.email || ""}
              disabled
              className="w-full border px-4 py-2 mt-1 bg-gray-100"
            />
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-6">
          Delivery address and contact details will be collected
          securely at the time of placing your order.
        </p>
      </div>
    </div>
  );
};

export default Profile;
