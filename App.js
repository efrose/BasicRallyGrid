Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    launch: function() {
        //Write app code here
  	var myStore = Ext.create('Rally.data.wsapi.Store', {
	        model: 'User Story',
	    	autoLoad: true,
	    	listeners: {
		    load: function(myStore, myData, mySuccess) {
	    	    //process data
		    var myGrid = Ext.create('Ext.Container', {
		    	items: [{
			    	xtype: 'rallygrid',
				    columnCfgs: ['FormattedID','Name','ScheduleState'],
				    storeConfig: {
				        model: 'userstory'
				    }
				}],
			    renderTo: Ext.getBody()
			});
		    this.add(myGrid);
		    },
		    scope: this
	        },
	    	fetch: ['FormattedID', 'Name', 'ScheduleState']
	    	});
        //API Docs: https://help.rallydev.com/apps/2.1/doc/
    }
});
