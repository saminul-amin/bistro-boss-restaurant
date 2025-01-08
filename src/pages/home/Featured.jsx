import SectionTitle from "../../components/SectionTitle";

import featuredImg from "../../assets/home/featured.jpg";

export default function Featured() {
  return (
    <div>
      <SectionTitle subHeading="Check it out" heading="Featured Item" />
      <div className="md:flex justify-center items-center py-8 px-16">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20, 2025</p>
          <p className="uppercase">where can I get some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
            officia corrupti quidem fugit error nesciunt quam atque, voluptatem
            quo dolorem quaerat fuga libero, dolor, porro sint sequi architecto
            laudantium soluta ipsum! Adipisci ea quasi consectetur omnis
            mollitia. Labore fugit cum possimus ducimus maiores est veniam
            delectus, tempore id! Omnis, maiores.
          </p>
          <button className="btn btn-outline">Read More!</button>
        </div>
      </div>
    </div>
  );
}
