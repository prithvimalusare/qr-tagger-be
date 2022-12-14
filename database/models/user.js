'use strict';

let crypto = require('crypto');

const { SALT } = require('../../envVars') ;

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Tag,{foreignKey:'user_uid'})
    }
    validatePassword(password){
      return encryptPassword(password) === this.password
    }
  }
  User.init({
    user_uid: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    full_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false,
      set(value){
        this.setDataValue('password', encryptPassword(value)  )
      }
    }
  }, {
    sequelize,
    modelName: 'User',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    paranoid: true,
    timestamps: true,
  },{
    sequelize
  });
  
  return User;
};

const encryptPassword = (password) =>{
  return crypto.pbkdf2Sync(password, SALT, 1000, 64, `sha512`).toString(`hex`)
}