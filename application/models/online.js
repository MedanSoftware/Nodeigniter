module.exports = (sequelize, DataTypes) => {
	var Online = sequelize.define('Online',{
		id : {
			type : DataTypes.BIGINT.UNSIGNED,
			primaryKey : true,
			autoIncrement : true
		},
		group : {
			type : DataTypes.STRING(10),
			allowNull : true
		},
		user_id : {
			type : DataTypes.BIGINT,
			defaultValue : 0
		},
		store_id : {
			type : DataTypes.BIGINT,
			defaultValue : 0
		},
		device_id : {
			type : DataTypes.STRING(40)
		},
		browser_id : {
			type : DataTypes.STRING(40),
			allowNull : true
		},
		identify : {
			type : DataTypes.TEXT
		},
		on_page : {
			type : DataTypes.TEXT,
			allowNull : true
		}
	});

	Online.associate = function(models) {
		this.belongsTo(models.User, { foreignKey : 'user_id', targetKey : 'id' });
		this.belongsTo(models.Store, { foreignKey : 'store_id', targetKey : 'id' });
	}

	return Online;
};