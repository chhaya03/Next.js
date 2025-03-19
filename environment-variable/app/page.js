"use client"


export default function Home() {
console.log("this is my id:", process.env.ID)
console.log("this is my secret:", process.env.SECRET)

  return (
    <div>
      Hey this is home. this is is {process.env.ID} and secret is {process.env.SECRET}
    </div>
  );
}
