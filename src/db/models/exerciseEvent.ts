import { DataTypes, Model } from 'sequelize';
import sequelize from '../config.js';

class ExerciseEvent extends Model {}

ExerciseEvent.init({
  ID: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  ExerciseID: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  PlanID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  StartTime: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  EndTime: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  Duration: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  Weight: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  IsRepeat: {
    type: DataTypes.TINYINT,
    allowNull: true,
  },
  RepeatCount: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  Interval: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

}, {
  sequelize,
  modelName: 'ExerciseEvent',
  tableName: 'exercise_event',
  timestamps: false,
});

export default ExerciseEvent;