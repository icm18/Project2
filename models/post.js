module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
      name: DataTypes.STRING,
      imgUrl:DataTypes.TEXT,
      title: DataTypes.STRING,
      description: DataTypes.TEXT
    });
    return Post;
  };
  