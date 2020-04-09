import axios from "axios";

const dataProvider = {
  getList: (resource, params) => {
    console.log(params);

    return axios({
      method: "get",
      url: `http://127.0.0.1:9010/${resource}`,
    })
      .then((res) => {
        return {
          data: res.data,
          total: res.data.length,
        };
      })
      .catch((err) => {
        console.log(err);
        return Promise.reject();
      });
  },
  getOne: (resource, params) => {
    return axios({
      method: "get",
      url: `http://127.0.0.1:9010/${resource}/${params.id}`,
    })
      .then((res) => {
        return {
          data: res.data,
        };
      })
      .catch((err) => {
        console.log(err);
        return Promise.reject();
      });
  },
  getMany: (resource, params) => {
    return axios({
      method: "get",
      url: `http://127.0.0.1:9010/${resource}?filter={id:${JSON.stringify(
        params.ids
      )}}`,
    })
      .then((res) => {
        return {
          data: res.data,
          total: res.data.length,
        };
      })
      .catch((err) => {
        console.log(err);
        return Promise.reject();
      });
  },
  create: (resource, params) => {
    return axios({
      method: "post",
      url: `http://127.0.0.1:9010/${resource}`,
      data: params.data,
    })
      .then((res) => {
        return {
          data: res.data,
        };
      })
      .catch((error) => {
        console.log(error);
        return Promise.reject();
      });
  },
  update: (resource, params) => {
    const { id, data } = params;

    return axios({
      method: "put",
      url: `http://127.0.0.1:9010/${resource}/${id}`,
      data,
    })
      .then((res) => {
        return Promise.resolve({
          data: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
        return Promise.reject();
      });
  },
  delete: (resource, params) => {},
  deleteMany: (resource, params) => {},
};

export default dataProvider;
