import React, { useEffect, useState } from "react";
import "./index.scss";
import Navbar from "../../layout/Navbar";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Footer from "../../layout/Footer";
import { Helmet } from "react-helmet-async";

const AddPage = () => {
  const [data, setData] = useState();
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState(null);

  function checkTagi(yazi) {
    if (typeof yazi === "string") {
      return yazi.toLowerCase();
    } else {
      return yazi;
    }
  }

  const fetchData = async () => {
    const resp = await fetch("http://localhost:5500/api/watch");
    const jsonData = await resp.json();
    setData(jsonData);
  };

  const handleDelete = async (_id) => {
    const resp = await axios.delete(`http://localhost:5500/api/watch/${_id}`);
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div id="add">
      <Helmet>
        <title>AddPage</title>
      </Helmet>
      <Navbar />
      <Formik
        initialValues={{ title: "", image: "", price: "" }}
        validationSchema={Yup.object({
          title: Yup.string().required("Required"),
          image: Yup.string().required("Required"),
          price: Yup.string().required("Required"),
        })}
        onSubmit={(values, { resetForm, setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
          const handleAdd = async () => {
            const resp = await axios.post(
              "http://localhost:5500/api/watch",
              values
            );
            fetchData();
          };
          handleAdd();
          resetForm();
        }}
      >
        <Form>
          <label htmlFor="title">Title</label>
          <Field name="title" type="text" />
          <ErrorMessage name="title" />

          <label htmlFor="image">Image</label>
          <Field name="image" type="text" />
          <ErrorMessage name="image" />

          <label htmlFor="price">Price</label>
          <Field name="price" type="price" />
          <ErrorMessage name="price" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
      <input type="text" onChange={(e) => setSearch(e.target.value)} />
      <button onClick={() => setSort({ property: "title", asc: true })}>
        AZ
      </button>
      <button onClick={() => setSort({ property: "title", asc: false })}>
        ZA
      </button>
      <button onClick={() => setSort({ property: "price", asc: true })}>
        1-9
      </button>
      <button onClick={() => setSort({ property: "price", asc: false })}>
        9-1
      </button>
      <button onClick={() => setSort(null)}>Default</button>
      <table>
        <tbody>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Delete</th>
          </tr>
          {data &&
            data
              .filter((x) =>
                x.title.toLowerCase().trim().includes(search.toLowerCase())
              )
              .sort((a, b) => {
                if (sort && sort.asc === true) {
                  return checkTagi(a[sort.property]) >
                    checkTagi(b[sort.property])
                    ? 1
                    : checkTagi(b[sort.property]) > checkTagi(a[sort.property])
                    ? -1
                    : 0;
                } else if (sort && sort.asc === false) {
                  return checkTagi(a[sort.property]) <
                    checkTagi(b[sort.property])
                    ? 1
                    : checkTagi(b[sort.property]) < checkTagi(a[sort.property])
                    ? -1
                    : 0;
                } else {
                  return 0;
                }
              })
              .map((item) => (
                <tr key={item._id}>
                  <td>
                    <img src={item.image} alt="" />
                  </td>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>
                    <button onClick={() => handleDelete(item._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
      <Footer />
    </div>
  );
};

export default AddPage;
