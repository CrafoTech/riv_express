const express = require("express");
const cors = require("cors");
const { MongoClient, ObjectId } = require("mongodb");

const app = express();
let Port = process.env.PORT || 8080;
// const uri = `mongodb+srv://rivexpress30_db_user:rivexpres%40%40%401234@rivexpress.q8j8iwj.mongodb.net/?appName=rivexpress`;
// const uri = `mongodb://localhost:27017/`;
const uri = `mongodb+srv://reagansekimu_db_user:crafotech_1_bms@cluster0.rrf9cot.mongodb.net/?appName=Cluster0`;

app.use(express.json());
app.use(cors());

function generateServerError(erro, type) {
  const Error = {
    type,
    name: erro.name,
    msg: erro.message,
  };
  console.error(
    `Oops An error Occured While ${Error.type}\n ${Error.name} ${Error.msg}`,
  );
  return Error;
}

async function initConnection() {
  try {
    const client = await MongoClient.connect(uri);
    return client;
  } catch (err) {
    console.error(
      `Oops Error While Connectiong to the DB: ${err.name}_${err.message}`,
    );
  }
}

app.get("/", async (req, res) => {
  try {
    res.status(200).send(`<h1> Hello <mark>World</mark>!</h1>`);
  } catch (err) {
    const serverErrObj = generateServerError(err, "Initial Error");
    return res.status(500).send("Oops An error Ocured");
  }
});

// GENERAL CRUD OPERATIONS

// Adding Many Documents
app.post("/insertmany/:dbname/:cname", async (req, res) => {
  let { dbname, cname } = req.params;
  try {
    const client = await initConnection();
    const db = await client.db(dbname);
    const rslt = await db.collection(cname).insertMany(req.body);
    return res.status(200).json(rslt);
  } catch (err) {
    const serverErrObj = generateServerError(err, "Inserting Many Documents");
    return res.status(500).json(serverErrObj);
  }
});
// Adding a Document
app.post("/insertone/:dbname/:cname", async (req, res) => {
  let { dbname, cname } = req.params;
  try {
    const client = await initConnection();
    const db = await client.db(dbname);
    const rslt = await db.collection(cname).insertOne(req.body);
    return res.status(200).json(rslt);
  } catch (err) {
    const serverErrObj = generateServerError(err, "Inserting One Document");
    return res.status(500).json(serverErrObj);
  }
});
// Getting all Documents
app.get("/getall/:dbname/:cname", async (req, res) => {
  let { dbname, cname } = req.params;
  try {
    const client = await initConnection();
    const db = await client.db(dbname);
    const data = await db.collection(cname).find().toArray();
    return res.status(200).json(data);
  } catch (err) {
    const serverErrObj = generateServerError(err, "Getting all Documents");
    return res.status(500).json(serverErrObj);
  }
});
// Getting One Document By DOC ID
app.get("/getonedoc_id/:dbname/:cname/:id", async (req, res) => {
  let { dbname, cname, id } = req.params;
  try {
    const client = await initConnection();
    const db = await client.db(dbname);
    const data = await db
      .collection(cname)
      .find({ _id: new ObjectId(id) })
      .toArray();
    return res.status(200).json(data);
  } catch (err) {
    const serverErrObj = generateServerError(
      err,
      `Getting One Document By DOC ID: ${id}`,
    );
    return res.status(500).json(serverErrObj);
  }
});
// Updating One Document By DOC ID
app.patch("/updateonedoc_id/:dbname/:cname/:id", async (req, res) => {
  let { dbname, cname, id } = req.params;
  try {
    const client = await initConnection();
    const db = await client.db(dbname);
    const rslt = await db
      .collection(cname)
      .updateOne({ _id: new ObjectId(id) }, { $set: req.body });
    return res.status(200).json(rslt);
  } catch (err) {
    const serverErrObj = generateServerError(
      err,
      `Updating One Document By DOC ID: ${id}`,
    );
    return res.status(500).json(serverErrObj);
  }
});
// Deleting One Document By DOC ID
app.delete("/deleteonedoc_id/:dbname/:cname/:id", async (req, res) => {
  let { dbname, cname, id } = req.params;
  try {
    const client = await initConnection();
    const db = await client.db(dbname);
    const rslt = await db
      .collection(cname)
      .deleteOne({ _id: new ObjectId(id) });
    return res.status(200).json(rslt);
  } catch (err) {
    const serverErrObj = generateServerError(
      err,
      `Deleting One Document By DOC ID: ${id}`,
    );
    return res.status(500).json(serverErrObj);
  }
});

// SPECIFIC OPERATIONS

// Adding Many Assets
app.post("/insertmanyassets/:dbname/:cname", async (req, res) => {
  let { dbname, cname } = req.params;
  let allAssets = [];
  // let dat = req.body;
  try {
    req.body.forEach((asset) => {
      let assetObj = {
        asset_id: asset.asset_id,
        modal: asset.modal,
        distributor: asset.distributor,
        bought_on: asset.bought_on,
        asset_pic: asset.asset_pic,
        collections: [],
        rider: {
          rid: "",
          rpic: "",
          rname: "",
          remail: "",
          rtel: "",
          rstatus: "",
          rtype: "",
          entry_date: "",
          resignatio_date: "",
          guaranter: [],
          notifications: [],
        },
      };
      allAssets.push(assetObj);
    });
    const client = await initConnection();
    const db = await client.db(dbname);
    const rslt = await db.collection(cname).insertMany(allAssets);
    return res.status(200).json(rslt);
  } catch (err) {
    const serverErrObj = generateServerError(err, "Inserting Many Assets");
    return res.status(500).json(serverErrObj);
  }
});
// Adding one Asset
app.post("/insertoneasset/:dbname/:cname", async (req, res) => {
  let { dbname, cname } = req.params;
  try {
    let asset = {
      asset_id: req.body.asset_id,
      modal: req.body.modal,
      distributor: req.body.distributor,
      bought_on: req.body.bought_on,
      asset_pic: req.body.asset_pic,
      asset_type: req.body.asset_type,
      asset_state: req.body.asset_state,
      collections: [
        {
          cid: "----",
          cdate: "----",
          crider: "----",
          cmoney: "",
          amount_expected: "",
          amount_recieved: "",
          balance_due: "",
          wallet: "",
          trips: [],
        },
      ],
      rider: {
        rid: "----",
        rpic: "../assets/icons/user.png",
        rname: "----",
        remail: "----",
        rtel: "----",
        rstatus: "----",
        rtype: "----",
        entry_date: "----",
        resignatio_date: "----",
        guaranter: { gname: "----", gtel: "----", gresidence: "----" },
        notifications: [],
      },
    };
    const client = await initConnection();
    const db = await client.db(dbname);
    const rslt = await db.collection(cname).insertOne(asset);
    return res.status(200).json(rslt);
  } catch (err) {
    const serverErrObj = generateServerError(err, "Inserting One Asset");
    return res.status(500).json(serverErrObj);
  }
});

// Getting One Asset By ASSET ID
app.get("/getoneasset_id/:dbname/:cname/:id", async (req, res) => {
  let { dbname, cname, id } = req.params;
  try {
    const client = await initConnection();
    const db = await client.db(dbname);
    const data = await db.collection(cname).find({ asset_id: id }).toArray();
    return res.status(200).json(data);
  } catch (err) {
    const serverErrObj = generateServerError(
      err,
      `Getting One Asset By ASSET ID: ${id}`,
    );
    return res.status(500).json(serverErrObj);
  }
});
// Getting One Asset By ASSET ID
app.get("/getonerider_id/:dbname/:cname/:id", async (req, res) => {
  let { dbname, cname, id } = req.params;
  try {
    const client = await initConnection();
    const db = await client.db(dbname);
    const data = await db.collection(cname).find({ rid: id }).toArray();
    return res.status(200).json(data);
  } catch (err) {
    const serverErrObj = generateServerError(
      err,
      `Getting One Rider By RIDER ID: ${id}`,
    );
    return res.status(500).json(serverErrObj);
  }
});

// Updating One Asset By ASSET ID
app.patch("/updateoneasset_id/:dbname/:cname/:id/:edit_f", async (req, res) => {
  let { dbname, cname, id, edit_f } = req.params;
  // console.log("\nBODY :: ",req.body)
  let rider_ID = req.body.rider_id;
  try {
    const client = await initConnection();
    const db = await client.db(dbname);

    let riderData = "";
    let updateAssetCOllectionRslt = "";
    let updateRiderRst = "";
    let updateAssetRiderRst = "";
    let updateAssetRst = "";
    let updateRiderAssetRst = "";
    switch (edit_f) {
      case "asset":
        console.log("RIDER UPDATES ON ASSET: ", req.body);
        // updateAssetRiderRst = await
        updateRiderAssetRst = await db
          .collection("rider_data")
          .updateOne({ rid: rider_ID }, { $set: { asset: req.body } });
        updateAssetRst = await db
          .collection(cname)
          .updateOne({ asset_id: id }, { $set: req.body });
        break;
      case "rider":
        console.log("RIDER UPDATES ON ASSET: ", req.body);
        // updateAssetRiderRst = await
        // updateRiderRst = await db.collection('rider_data').updateOne({rid:rider_ID},{$set: req.body})
        updateAssetRiderRst = await db
          .collection(cname)
          .updateOne({ asset_id: id }, { $set: req.body });
        // updateAssetRiderRst
        break;
      case "collection":
        rider_ID = req.body.rider_collection_data.rider_id;
        updateAssetCOllectionRslt = await db
          .collection(cname)
          .updateOne({ asset_id: id }, { $set: req.body.asset_collection });
        riderData = await db
          .collection("rider_data")
          .find({ rid: rider_ID })
          .toArray();
        // let rider_Collection =
        riderData[0].collections.forEach((collection) => {
          if (collection.cid == req.body.rider_collection_data.collection_id) {
            collection.cmoney = Number(req.body.rider_collection_data.cmoney);
            collection.amount_expected = Number(
              req.body.rider_collection_data.amount_expected,
            );
            collection.amount_recieved = Number(
              req.body.rider_collection_data.amount_recieved,
            );
            collection.balance_due = Number(
              req.body.rider_collection_data.balance_due,
            );
            collection.wallet = Number(req.body.rider_collection_data.wallet);
          }
        });
        const riderRslt = await db
          .collection("rider_data")
          .updateMany(
            { rid: rider_ID },
            { $set: { collections: riderData[0].collections } },
          );
        // console.log(riderData)
        break;
    }
    return res.status(200).json(updateAssetCOllectionRslt);
  } catch (err) {
    const serverErrObj = generateServerError(
      err,
      `Updating One Asset By ASSET ID: ${id}`,
    );
    return res.status(500).json(serverErrObj);
  }
});

// Updating Riders' Data By ASSET ID /ALSO/ Assigning a new Rider
app.patch("/updateone_rider_asset_id/:dbname/:cname/:id", async (req, res) => {
  let { dbname, cname, id } = req.params;
  try {
    const client = await initConnection();
    const db = await client.db(dbname);
    const rslt = await db
      .collection(cname)
      .updateOne({ asset_id: id }, { $set: req.body });
    return res.status(200).json(rslt);
  } catch (err) {
    const serverErrObj = generateServerError(
      err,
      `Updating  Rider's Info By ASSET ID: ${id}`,
    );
    return res.status(500).json(serverErrObj);
  }
});
// Updating Riders' Data By RIDER ID
app.patch("/updateone_rider_rider_id/:dbname/:cname/:id", async (req, res) => {
  let { dbname, cname, id } = req.params;
  try {
    const client = await initConnection();
    const db = await client.db(dbname);
    const rslt = await db
      .collection(cname)
      .updateOne({ rid: id }, { $set: req.body });
    return res.status(200).json(rslt);
  } catch (err) {
    const serverErrObj = generateServerError(
      err,
      `Updating  Rider's Info By RIDER ID: ${id}`,
    );
    return res.status(500).json(serverErrObj);
  }
});
// Updating Riders' Data By RIDER ID || COLLECTIONS
app.patch(
  "/updateone_rider_collections_rider_id/:dbname/:cname/:id",
  async (req, res) => {
    let { dbname, cname, id } = req.params;
    try {
      const client = await initConnection();
      const db = await client.db(dbname);
      const rslt = await db
        .collection(cname)
        .updateOne({ rid: id }, { $set: { collections: req.body } });
      return res.status(200).json(rslt);
    } catch (err) {
      const serverErrObj = generateServerError(
        err,
        `Updating  Rider's COLLECTIONS By RIDER ID: ${id}`,
      );
      return res.status(500).json(serverErrObj);
    }
  },
);

// Deleting One Asset By ASSET ID
app.delete("/deleteoneasset_id/:dbname/:cname/:id", async (req, res) => {
  let { dbname, cname, id } = req.params;
  try {
    const client = await initConnection();
    const db = await client.db(dbname);
    const rslt = await db.collection(cname).deleteOne({ asset_id: id });
    return res.status(200).json(rslt);
  } catch (err) {
    const serverErrObj = generateServerError(
      err,
      `Deleting One Asset By ASSET ID: ${id}`,
    );
    return res.status(500).json(serverErrObj);
  }
});
// Deleting One RIDER By RIDER ID
app.delete("/deleteone_rider_rider_id/:dbname/:cname/:id", async (req, res) => {
  let { dbname, cname, id } = req.params;
  try {
    const client = await initConnection();
    const db = await client.db(dbname);
    const rslt = await db.collection(cname).deleteOne({ rid: id });
    return res.status(200).json(rslt);
  } catch (err) {
    const serverErrObj = generateServerError(
      err,
      `Deleting One Rider By RIDER ID: ${id}`,
    );
    return res.status(500).json(serverErrObj);
  }
});
// Deleting ALL Riders By ASSET ID
app.delete(
  "/deletemany_riders_asset_id/:dbname/:cname/:id",
  async (req, res) => {
    let { dbname, cname, id } = req.params;
    try {
      const client = await initConnection();
      const db = await client.db(dbname);
      const rslt = await db
        .collection(cname)
        .deleteMany({ "asset.asset_id": id });
      return res.status(200).json(rslt);
    } catch (err) {
      const serverErrObj = generateServerError(
        err,
        `Deleting Many RIDERS By ASSET ID: ${id}`,
      );
      return res.status(500).json(serverErrObj);
    }
  },
);

// Collection Work

//Creating a new collection
app.patch("/createcollection/:dbname/:cname/:id/:id_rid", async (req, res) => {
  let { dbname, cname, id } = req.params;
  try {
    const client = await initConnection();
    const db = await client.db(dbname);
    const data = await db.collection(cname).find({ asset_id: id }).toArray();
    data[0].collections.push(req.body);
    const rslt = await db
      .collection(cname)
      .updateOne(
        { asset_id: id },
        { $set: { collections: data[0].collections } },
      );
    return res.status(200).json(rslt);
  } catch (err) {
    const serverErrObj = generateServerError(
      err,
      `Updating  Collections Info By ASSET ID: ${id}`,
    );
    return res.status(500).json(serverErrObj);
  }
});
//Updating collections for A Rider
app.patch(
  "/update_rider_collection/:dbname/:cname/:id/:rider_id",
  async (req, res) => {
    let { dbname, cname, id, rider_id } = req.params;
    try {
      const client = await initConnection();
      const db = await client.db(dbname);
      const data = await db.collection(cname).find({ asset_id: id }).toArray();
      let newRiderCollections = [];
      data[0].collections.forEach((collection) => {
        if (collection.crider == rider_id) {
          newRiderCollections.push(collection);
        }
      });
      // data[0].collections.push(req.body)
      const rslt = await db
        .collection("rider_data")
        .updateOne(
          { rid: rider_id },
          { $set: { collections: newRiderCollections } },
        );
      return res.status(200).json(rslt);
    } catch (err) {
      const serverErrObj = generateServerError(
        err,
        `Updating  Rider ${rider_id} Collections Info By ASSET ID: ${id}`,
      );
      return res.status(500).json(serverErrObj);
    }
  },
);
// Creating a new trip
app.patch("/createtrip/:dbname/:cname/:id/:date", async (req, res) => {
  let { dbname, cname, id, date } = req.params;
  let { trip } = req.body;
  try {
    const client = await initConnection();
    const db = await client.db(dbname);
    const data = await db.collection(cname).find({ asset_id: id }).toArray();
    let randNo = Math.floor(Math.random() * 1999);
    let new_collection = {
      cid: `C_${randNo}`,
      cdate: date,
      crider: req.body.info.crider,
      cmoney: req.body.info.cmoney,
      amount_expected: req.body.info.amount_expected,
      amount_recieved: req.body.info.amount_recieved,
      balance_due: req.body.info.balance_due,
      wallet: req.body.info.wallet,
      trips: [req.body.trip],
    };
    let newCOllectionFlag = true;
    let foundColectionIndex = 0;
    let collection_updates = [];
    data[0].collections.forEach((collection, i) => {
      if (collection.cdate == date) {
        collection_updates = collection;
        foundColectionIndex = i;
        newCOllectionFlag = false;
      } else {
        newCOllectionFlag = true;
      }
    });
    switch (newCOllectionFlag) {
      case true:
        let len = data[0].collections.length;
        new_collection.amount_expected =
          data[0].collections[len - 1].balance_due;
        data[0].collections.push(new_collection);
        break;
      case false:
        collection_updates.trips.push(req.body.trip);
        data[0].collections.splice(foundColectionIndex, 1);
        data[0].collections.push(collection_updates);
        break;
    }
    const rslt = await db
      .collection(cname)
      .updateOne(
        { asset_id: id },
        { $set: { collections: data[0].collections } },
      );
    return res.status(200).json(rslt);
  } catch (err) {
    const serverErrObj = generateServerError(
      err,
      `Updating  Collections Info By ASSET ID: ${id}`,
    );
    return res.status(500).json(serverErrObj);
  }
});
// Starting a trip
app.patch("/starttrip/:dbname/:cname/:id/:date/:t_id", async (req, res) => {
  let { dbname, cname, id, date, t_id } = req.params;
  try {
    const client = await initConnection();
    const db = await client.db(dbname);
    const data = await db.collection(cname).find({ asset_id: id }).toArray();
    data[0].collections.forEach((collection, i) => {
      if (collection.cdate == date) {
        collection_updates = collection;
        collection.trips.forEach((trip) => {
          if (trip.tid == t_id) {
            trip.status = req.body.status;
          }
        });
      }
    });
    const rslt = await db
      .collection(cname)
      .updateOne(
        { asset_id: id },
        { $set: { collections: data[0].collections } },
      );
    return res.status(200).json(rslt);
  } catch (err) {
    const serverErrObj = generateServerError(
      err,
      `Updating  Trip -${t_id}- status Info By ASSET ID: ${id}`,
    );
    return res.status(500).json(serverErrObj);
  }
});
// Finishing a trip
app.patch("/finishtrip/:dbname/:cname/:id/:date/:t_id", async (req, res) => {
  let { dbname, cname, id, date, t_id } = req.params;
  try {
    const client = await initConnection();
    const db = await client.db(dbname);
    const data = await db.collection(cname).find({ asset_id: id }).toArray();
    let newCollectionMoney = 0;
    let oldCollectionMoney = 0;
    console.log("Old CMOENY: " + oldCollectionMoney);
    data[0].collections.forEach((collection, i) => {
      if (collection.cdate == date) {
        oldCollectionMoney = collection.cmoney;
        console.log(collection.cmoney);
        collection_updates = collection;
        newCollectionMoney =
          Number(collection.cmoney) + Number(req.body.trip_amount);
        collection.cmoney = newCollectionMoney;
        console.log(
          "\n+++++ Collection Money ++++ Before : ",
          collection.amount_expected,
        );
        collection.amount_expected =
          Number(collection.amount_expected) + Number(req.body.trip_amount);
        console.log(
          "+++++ Collection Money ++++ After : ",
          collection.amount_expected,
        );
        collection.trips.forEach((trip) => {
          if (trip.tid == t_id) {
            trip.t_end_time = req.body.t_end_time;
            trip.tmins = req.body.tmins;
            trip.status = req.body.status;
          }
        });
      }
    });
    // collection.cmoney = Number(collection.cmoney) + req.body.trip_amount
    console.log("Trip Money: " + req.body.trip_amount);
    console.log("New CMOENY: " + newCollectionMoney);
    // switch (newCOllectionFlag) {
    //     case true:
    //         data[0].collections.push(new_collection)
    //         break;
    //     case false:
    //         collection_updates.trips.push(req.body.trip)
    //         data[0].collections.splice(foundColectionIndex,1)
    //          data[0].collections.push(collection_updates)
    //          break;
    // }
    const rslt = await db
      .collection(cname)
      .updateOne(
        { asset_id: id },
        { $set: { collections: data[0].collections } },
      );
    return res.status(200).json(rslt);
  } catch (err) {
    const serverErrObj = generateServerError(
      err,
      `Updating  Trip -${t_id}- status Info By ASSET ID: ${id}`,
    );
    return res.status(500).json(serverErrObj);
  }
});
// Deleting a trip
app.patch("/deletetrip/:dbname/:cname/:id/:date/:t_id", async (req, res) => {
  let { dbname, cname, id, date, t_id } = req.params;
  try {
    const client = await initConnection();
    const db = await client.db(dbname);
    const data = await db.collection(cname).find({ asset_id: id }).toArray();
    let trip_index = 0;
    data[0].collections.forEach((collection, i) => {
      if (collection.cdate == date) {
        collection_updates = collection;
        collection.trips.forEach((trip, index) => {
          if (trip.tid == t_id) {
            trip_index = index;
            collection.trips.splice(index, 1);
          }
        });
      }
    });
    const rslt = await db
      .collection(cname)
      .updateOne(
        { asset_id: id },
        { $set: { collections: data[0].collections } },
      );
    return res.status(200).json(rslt);
  } catch (err) {
    const serverErrObj = generateServerError(
      err,
      `Deleting  Trip -${t_id}- status Info By ASSET ID: ${id}`,
    );
    return res.status(500).json(serverErrObj);
  }
});
// Getting one collection by the CollectionDate
app.get("/getone_collec_cdate/:dbname/:cname/:id/:cdate", async (req, res) => {
  let { dbname, cname, id, cdate } = req.params;
  try {
    const client = await initConnection();
    const db = await client.db(dbname);
    const data = await db.collection(cname).find({ asset_id: id }).toArray();
    let collections = await data[0].collections;
    let collec = [];
    collections.forEach((collection, i) => {
      if (collection.cdate == cdate) {
        collec = collection;
      }
    });
    return res.status(200).json(collec);
  } catch (err) {
    const serverErrObj = generateServerError(
      err,
      `Getting One Collection for One Asset By ASSET ID: ${id}`,
    );
    return res.status(500).json(serverErrObj);
  }
});

// Updating user actions
app.patch("/update_user_ations/:user_id", async (req, res) => {
  const { user_id } = req.params;
  const user_action = req.body;

  try {
    const client = await initConnection();
    const db = await client.db("data");

    const updated_actions = await db
      .collection("admin_data")
      .find({ user_id: user_id })
      .toArray();
    updated_actions[0].user_actions.push(user_action);

    const data = await db
      .collection("admin_data")
      .updateOne(
        { user_id: user_id },
        { $set: { user_actions: updated_actions[0].user_actions } },
      );
    console.log("\n ------ \n", updated_actions);
    return res.status(200).json(data);
  } catch (err) {
    const serverErrObj = generateServerError(
      err,
      `Updating the logged in user actions: User: ${user_id}`,
    );
    // console.error(serverErrObj);
    // console.log(user_action);
    return res.status(500).json(serverErrObj);
  }
});
// Deleting user actions
app.patch("/delete_user_ations/:user_id/:act_id", async (req, res) => {
  const { user_id, act_id } = req.params;
  //   const user_action = req.body;

  try {
    const client = await initConnection();
    const db = await client.db("data");

    const updated_actions = await db
      .collection("admin_data")
      .find({ user_id: user_id })
      .toArray();
    let newActionArr = updated_actions[0].user_actions.filter(
      (action) => action.action_id !== act_id,
    );

    const data = await db
      .collection("admin_data")
      .updateOne(
        { user_id: user_id },
        { $set: { user_actions: newActionArr } },
      );
    console.log("\n ------ \n", updated_actions);
    return res.status(200).json(data);
  } catch (err) {
    const serverErrObj = generateServerError(
      err,
      `Deleting the logged in user action: User: ${user_id} action: ${act_id}`,
    );
    // console.error(serverErrObj);
    // console.log(user_action);
    return res.status(500).json(serverErrObj);
  }
});
app.get("/getuseractions/:user_id", async (req, res) => {
  const { user_id } = req.params;
  //   const user_action = req.body;

  try {
    const client = await initConnection();
    const db = await client.db("data");

    const user_data = await db
      .collection("admin_data")
      .find({ user_id: user_id })
      .toArray();

    return res.status(200).json(user_data[0].user_actions);
  } catch (err) {
    const serverErrObj = generateServerError(
      err,
      `Deleting the logged in user action: User: ${user_id} action: ${act_id}`,
    );
    // console.error(serverErrObj);
    // console.log(user_action);
    return res.status(500).json(serverErrObj);
  }
});

// Logging in a rider
app.post("/login", async (req, res) => {
  let allAssets = [];
  try {
    const client = await initConnection();
    const db = await client.db("data");
    const rslt = await db.collection("rider_data").find().toArray();
    let ids = [];
    let emails = [];
    let login_status = false;
    rslt.forEach((record) => {
      ids.push(record.rid);
      emails.push(record.remail);
      // console.log(`Rid: ${record.rid} - email: ${record.remail}`)
      if (record.rid == req.body.rid && record.remail == req.body.remail) {
        login_status = true;
      }
    });

    return res.status(200).json(login_status);
  } catch (err) {
    const serverErrObj = generateServerError(err, "Logging in");
    return res.status(500).json(serverErrObj);
  }
});
// Logging in a User
app.post("/user_login", async (req, res) => {
  let allUsers = [];
  try {
    const client = await initConnection();
    const db = await client.db("data");
    const rslt = await db.collection("admin_data").find().toArray();
    allUsers = await rslt;

    let login_status = false;
    allUsers.forEach((user) => {
      if (
        user.user_id == req.body.user_id &&
        user.user_email == req.body.user_email
      ) {
        login_status = true;
      }
    });

    return res.status(200).json(login_status);
  } catch (err) {
    const serverErrObj = generateServerError(err, "Logging in");
    return res.status(500).json(serverErrObj);
  }
});

app.listen(Port, () => {
  console.log(`Development - Server started and running on Port: ${Port}`);
});
