import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config.js';
import Department from './department.js';

// Define an interface for the User model
interface UserAttributes {
  ID: string;
  GivenNames: string;
  Surname: string;
  Username: string;
  DepartmentID?: number;
  PreferredName?: string;
  Domain?: string;
  JobTitle?: string;
  Email?: string;
  Password?: string;
  Passkey?: string;
  DOB?: Date;
  Gender?: 'M' | 'F' | 'O' | 'X';
  Height?: number;
  Status?: string;
  AdminFlag?: number;
  ExitEnabled?: boolean;
  IsNew?: boolean;
  CalorieGoal?: number;
}

// Define a type for the User creation attributes
interface UserCreationAttributes extends Optional<UserAttributes, 'ID'> { }

// Extend the User class with the UserAttributes interface
class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public ID!: string;
  public GivenNames!: string;
  public Surname!: string;
  public Username!: string;
  public DepartmentID?: number;
  public PreferredName?: string;
  public Domain?: string;
  public JobTitle?: string;
  public Email?: string;
  public Password?: string;
  public Passkey?: string;
  public DOB?: Date;
  public Gender?: 'M' | 'F' | 'O' | 'X';
  public Height?: number;
  public Status?: string;
  public AdminFlag?: number;
  public ExitEnabled?: boolean;
  public IsNew?: boolean;
  public CalorieGoal?: number;
}

User.init({
  ID: {
    type: DataTypes.CHAR(36),
    primaryKey: true,
  },
  GivenNames: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  Surname: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  Username: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  DepartmentID: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true,
  },
  PreferredName: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  Domain: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  JobTitle: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  Email: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  Password: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  Passkey: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  DOB: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  Gender: {
    type: DataTypes.ENUM('M', 'F', 'O', 'X'),
    allowNull: true,
  },
  Height: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  Status: {
    type: DataTypes.CHAR(1),
    allowNull: true,
  },
  AdminFlag: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  ExitEnabled: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  IsNew: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  CalorieGoal: {
    type: DataTypes.INTEGER,
    allowNull: true,
  }
}, {
  sequelize,
  tableName: 'user',
  timestamps: false,
});

User.belongsTo(Department, {
  foreignKey: 'DepartmentID',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

export default User;
