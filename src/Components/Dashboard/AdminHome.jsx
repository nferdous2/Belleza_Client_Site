import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { FaDollarSign, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AdminHome = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [stats, setStats] = useState({});
    const [loading, setLoading] = useState(true);

    //get stats
    useEffect(() => {
        const fetchStats = async () => {
            const res = await axiosSecure.get('/admin-stats');
            setStats(res.data);
            setLoading(false);
        };
        fetchStats();
    }, [axiosSecure]);

    //update status
    const handleConfirmClick = async (paymentId) => {
        try {
            await axiosSecure.patch(`/update-status/${paymentId}`);
            setStats(prevStats => {
                const updatedPaymentHistory = prevStats.paymentHistory.map(payment => {
                    if (payment._id === paymentId) {
                        return { ...payment, status: 'confirmed' };
                    }
                    return payment;
                });
                return { ...prevStats, paymentHistory: updatedPaymentHistory };
            });
            Swal.fire("Success!", "The payment status has been updated to confirmed.", "success");
        } catch (error) {
            console.error('Error updating status:', error);
            Swal.fire("Error!", "There was an error updating the payment status.", "error");
        }
    };



    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="w-full max-w-5xl p-4">
                <h2 className="text-3xl mb-3 text-center">
                    <span>Hi, Welcome </span>
                    {user?.displayName ? user.displayName : 'Back'}
                </h2>
                <div className="stats shadow justify-around gap-4 p-4">
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <FaDollarSign className='text-3xl'></FaDollarSign>
                        </div>
                        <div className="stat-title">Revenue</div>
                        <div className="stat-value">${stats.revenue}</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <FaUsers className='text-3xl'></FaUsers>
                        </div>
                        <div className="stat-title">Users</div>
                        <div className="stat-value">{stats.users}</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
                            </svg>
                        </div>
                        <div className="stat-title">Orders</div>
                        <div className="stat-value">{stats.orders}</div>
                    </div>
                </div>

                <div className="flex justify-center mt-4">
                    <div className="overflow-x-auto w-full">
                        <table className="table table-zebra w-full">
                            <thead className="bg-black text-white">
                                <tr>
                                    <th>#</th>
                                    <th>Price</th>
                                    <th>Transaction ID</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {stats.paymentHistory?.map((payment, index) => (
                                    <tr key={payment._id}>
                                        <td>{index + 1}</td>
                                        <td>${payment.price}</td>
                                        <td>{payment.transactionId}</td>
                                        <td>
                                            <button className={`w-full font-bold p-2 rounded ${payment.status === 'confirmed' ? 'bg-green-500 text-white' : 'bg-pink-200 text-black'}`}>
                                                {payment.status}
                                            </button>
                                        </td>
                                        <td>
                                            <button className={`w-full font-bold p-2 rounded ${payment.status === 'confirmed' ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500'} text-white`}
                                                onClick={() => handleConfirmClick(payment._id)}
                                                disabled={payment.status === 'confirmed'}
                                            >
                                                Confirm
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AdminHome;
