module.exports = {
	sections: [
	  {
		name: 'Moose',
		content: 'read/introduction.md'
	  },
	  {
		name: 'Configuration',
		content: 'read/configuration.md'
	  },
	  {
		name: 'UI Components',
		content: 'read/ui.md',
		components: 'src/components/**/*.js',
		viewCode: 'collapse',
		exampleMode: 'collapse', // 'hide' | 'collapse' | 'expand'
		usageMode: 'collapse' // 'hide' | 'collapse' | 'expand'
	  }
	],
	  template: {
		favicon: './public/favicon.ico',
		head: {
		  scripts: [
			{
			  src: ''
			}
		  ],
		  links: [
			{
			  rel: 'stylesheet',
			  href:
				'//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css'
			},
			{
			  rel: 'stylesheet',
			  href:
				'//cdn.jsdelivr.net/npm/alertifyjs@1.11.2/build/css/themes/semantic.min.css'
			},
			{
				rel: 'stylesheet',
				href:
				  './src/containers/Splash/splash.css'
			  },
			{
			  rel: 'stylesheet',
			  href:
				'./src/index.css'
			}
		  ]
		}
	  }
	}