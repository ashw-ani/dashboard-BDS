export default async (user) => {
  try {
    const response = await fetch(
      `https://ascend-server.onrender.com/api/user/profile-update`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      }
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};