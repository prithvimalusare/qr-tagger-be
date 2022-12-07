'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Tag.belongsTo(models.User, {foreignKey:'user_uid',targetKey:'user_uid'})

    }
  }
  Tag.init({
    tag_uid: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_uid: {
      type: DataTypes.UUID,
      references: {
        model: 'Users',
        key: 'user_uid'
      }
    }
  }, {
    sequelize,
    modelName: 'Tag',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    paranoid: true,
    timestamps: true,
  });
  return Tag;
};