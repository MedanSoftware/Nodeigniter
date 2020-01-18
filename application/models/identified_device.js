module.exports = (sequelize, DataTypes) => {
	var Identified_device = sequelize.define('Identified_device',{
		id : {
			type : DataTypes.BIGINT.UNSIGNED,
			primaryKey : true,
			autoIncrement : true
		},
		unique_id : {
			type : DataTypes.STRING(40)
		},
		type : {
			type : DataTypes.STRING(10)
		},
		model : {
			type : DataTypes.STRING(10),
			allowNull : true
		},
		vendor : {
			type : DataTypes.STRING(10),
			allowNull : true
		},
		platform : {
			type : DataTypes.STRING(10)
		},
		os : {
			type : DataTypes.STRING(10)
		},
		os_name : {
			type : DataTypes.STRING(10)
		},
		os_version : {
			type : DataTypes.STRING(10)
		},
		is_browser : {
			type : DataTypes.BOOLEAN
		},
		local_ip : {
			type : DataTypes.STRING(15),
			allowNull : true
		},
		coordinate : {
			type : DataTypes.STRING,
			allowNull : true
		},
		pushable : {
			type : DataTypes.BOOLEAN,
			defaultValue : false
		},
		webpush : {
			type : DataTypes.TEXT,
			allowNull : true
		}
	});

	return Identified_device;
};