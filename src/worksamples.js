export default {
  "pageOrder": ["personal","bridging","handlers"],
  "languages": {
    "ReactJS": {
      "icon": "react-icon.svg",
      "color": "rgba(0, 216, 255, 0.1)"
    },
    "Ruby": {
      "icon": "ruby-icon.png",
      "color": "rgba(200, 36, 18, 0.2)"
    },
    "Java": {
      "icon": "java-icon.png",
      "color": "rgba(143, 88, 232,0.3)"
    }
  },
  "personal": {
    "title": "Personal Projects",
    "description": "",
    "items": [
      {
        "name": "Media Library",
        "language": "ReactJS",
        "text": "Using React Bootstrap, stores multiple lists of media titles (games/movies) with drag and drop support of items between lists",
        "link": "https://github.com/gerisc01/games-library"
      },
      {
        "name": "Budgeting Viewer",
        "language": "Ruby",
        "text": "Command line app that examines a large set of transaction data and finds recurring transactions along with the top transactions/income in a given month",
        "link": "https://github.com/gerisc01/budgeting-script"
      },
      {
        "name": "GitHub Resume",
        "language": "ReactJS",
        "text": "Application built using Material UI to show a Resume and Work Samples",
        "link": "https://github.com/gerisc01/resume"
      }
    ],
  },
  "bridging" : {
    "title": "Bridge Adapters",
    "description": "Java applications that integrate with the Kinetic Bridgehub application that enable users to return data from disparate data sources using a consistent request and response format.\n(Note: The Kinetic Bridgehub application that stores these Bridge Adapters is a Java Spring application I wrote and have maintained. While not open source, the .war file and the high level documentation for what the application does is freely available on a public Kinetic Community page.)",
    "items": [
      {
        "name": "Amazon EC2 Adapter",
        "language": "Java",
        "text": "Creates a signed REST Request to the EC2 API and parses the returned XML response to a JSON response consistent with other Bridge Adapters",
        "link": "https://github.com/kineticcommunity/kinetic-bridgehub-adapter-amazonec2"
      },
      {
        "name": "Chef Adapter",
        "language": "Java",
        "text": "Retrieves Node and Cookbook data from Chef's Server API, using a threaded http client to retrieve all the data as efficiently as possible",
        "link": "https://github.com/kineticcommunity/kinetic-bridgehub-adapter-chef"
      },
      {
        "name": "Microsoft SharePoint Adapter",
        "language": "Java",
        "text": "Uses Microsoft's REST API to retrieve items from a SharePoint user's lists",
        "link": "https://github.com/kineticcommunity/kinetic-bridgehub-adapter-sharepoint"
      },
      {
        "name": "Rest Template Adapter",
        "language": "Java",
        "text": "A modifiable template/documentation piece that includes everything needed help customers get up and running on creating their own adapters as quick as possible",
        "link": "https://github.com/kineticcommunity/kinetic-bridgehub-adapter-resttemplate"
      }
    ]
  },
  "handlers": {
    "title": "Task Handlers",
    "description": "Small Ruby applications that integrate with the Kinetic Task application that enable the Task engine to collect many different actions from external providers and chain them together in one workflow process. Packaged as zip files, each Task Handlers execution happens in the execute() method of the handler/init.rb file.\nThe linked task handlers only represent one handler that is a part of a suite of handlers designed to work together for each service.",
    "items" : [
      {
        "name": "Google Apps",
        "language": "Ruby",
        "text": "Using different Google libraries and authentication methods, integrated with multiple components of the G Suite to retrieve or update information for a user (linked: Sheets Row Append)",
        "link": "https://community.kineticdata.com/Kinetic_Task/Task_Handlers_and_Sources/Google_Apps_Service_Account/Google_Apps_SA_Sheets_Row_Append"
      },
      {
        "name": "Salesforce",
        "language": "Ruby",
        "text": "Using Salesforce's REST API and OAuth authentication (and previously using their SOAP API with SOQL) updates and retrieves information for Salesforce Objects (linked: Object Create)",
        "link": "https://community.kineticdata.com/Kinetic_Task/Task_Handlers_and_Sources/Salesforce/Salesforce_Object_Create"
      },
      {
        "name": "ServiceNow",
        "language": "Ruby",
        "text": "Using ServiceNow's REST API, integrated to generically update and retrieve information from ServiceNow objects (linked: Object Update)",
        "link": "https://community.kineticdata.com/Kinetic_Task/Task_Handlers_and_Sources/ServiceNow/ServiceNow_Object_Update"
      },
      {
        "name": "Twitter",
        "language": "Ruby",
        "text": "Using Twitter's Ruby library, composes a tweet and posts it to the authenticated account (linked: Tweet Compose)",
        "link": "https://community.kineticdata.com/Kinetic_Task/Task_Handlers_and_Sources/Twitter/Twitter_Tweet_Compose"
      }
    ]
  }
}