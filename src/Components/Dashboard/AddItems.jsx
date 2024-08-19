import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Title from "../../Shared/Title";
import { GiStabbedNote } from "react-icons/gi";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        console.log(data);

        try {
            // Upload image to imgbb and get the URL
            const imageFile = { image: data.image[0] };
            const res = await axiosPublic.post(image_hosting_api, imageFile, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });

            console.log('Image upload response:', res.data);

            if (res.data.success) {
                // Prepare the menu item data with the image URL
                const menuItem = {
                    name: data.name,
                    price: parseFloat(data.price),
                    duration: data.duration,
                    description: data.description,
                    popular: data.popular,
                    image: res.data.data.display_url
                };

                // Send the menu item data to the server
                const menuRes = await axiosSecure.post('/addData', {
                    category: data.category,
                    item: menuItem
                });

                console.log('response:', menuRes.data);

                if (menuRes.data.success) {
                    // Show success popup
                    reset();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${data.name} is added .`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                } else {
                    console.log('Failed to insert data.');
                }
            } else {
                console.log('Image upload failed:', res.data.error);
            }
        } catch (error) {
            console.error('Error during form submission:', error);
            // Handle error scenarios as needed
        }
    };



    return (
        <div>
            <Title heading="Add New Service" description="What's new?" ></Title>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Service Name*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Recipe Name"
                            {...register('name', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    <div className="flex gap-6">
                        {/* category */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select defaultValue="default" {...register('category', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="default">Select a category</option>
                                <option value="haircuts">Haircuts</option>
                                <option value="makeupServices">Makeup</option>
                                <option value="browServices">Brow Services</option>
                                <option value="nailServices">Nail Services</option>
                            </select>
                        </div>

                        {/* price */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Price"
                                {...register('price', { required: true })}
                                className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Is It popular*</span>
                            </label>
                            <select defaultValue="default" {...register('popular', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="default">Select </option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>

                            </select>
                        </div>


                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Duration</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Duration"
                                {...register('duration', { required: true })}
                                className="input input-bordered w-full" />
                        </div>
                    </div>
                    {/* recipe details */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea {...register('description')} className="textarea textarea-bordered h-24" placeholder="Description"></textarea>
                    </div>

                    <div className="form-control w-full my-6">
                        <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>

                    <button className="btn">
                        Add <GiStabbedNote className="ml-4 text-xl "></GiStabbedNote>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;
