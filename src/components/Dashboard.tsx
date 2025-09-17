
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import axios from "../api/axios";

interface UserData {
  email: string;
  pitchCount: number;
}

const Dashboard = () => {
  const [user, setUser] = useState<UserData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          setError('Not authenticated');
          return;
        }
        const response = await axios.get('/api/user/me', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUser(response.data);
      } catch (err) {
        setError('Failed to fetch user data');
      }
    };

    fetchUserData();
  }, []);

  const remainingPitches = user ? 10 - user.pitchCount : 0;

  return (
    <section className="py-20 px-6 bg-gradient-subtle">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Welcome, {user ? user.email : '...'}
          </h2>
          <p className="text-xl text-muted-foreground">
            Manage and track your generated pitches
          </p>
        </div>

        <div className="grid gap-6 mb-8 md:grid-cols-2">
            <Card className="shadow-elegant">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Pitches Used</p>
                    <p className="text-3xl font-bold text-foreground">{user ? user.pitchCount : '-'}</p>
                  </div>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-primary text-xl">📝</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Pitches Remaining</p>
                    <p className="text-3xl font-bold text-foreground">{user ? remainingPitches : '-'}</p>
                  </div>
                  <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                    <span className="text-success text-xl">✅</span>
                  </div>
                </div>
              </CardContent>
            </Card>
        </div>

        {error && <p className="text-red-500 text-center">{error}</p>}

      </div>
    </section>
  );
};

export default Dashboard;
