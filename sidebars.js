/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
	mySidebar: [
		{
			type: "doc",
			id: "home",
			label: "Welcome",
		},
		{
			type: "category",
			collapsible: false,
			label: "Get Started",
			items: [
				{
					type: "autogenerated",
					dirName: "tutorials",
				},
			],
		},
		{
			type: "category",
			label: "Features",
			collapsible: false,
			collapsed: false,
			items: [
				{
					type: "doc",
					id: "features/projects-and-env",
					label: "Projects & Environments",
				},
				{
					type: "category",
					label: "Policy Editor",
					items: [
						{
							type: "doc",
							id: "features/Policy Editor/editor-overview",
							label: "Editor Overview",
						},
						{
							type: "category",
							collapsible: true,
							collapsed: true,
							label: "RBAC",
							items: [
								{
									type: "autogenerated",
									dirName: "features/Policy Editor/RBAC",
								},
							],
						},
						{
							type: "category",
							collapsible: true,
							collapsed: true,
							label: "ABAC",
							items: [
								{
									type: "autogenerated",
									dirName: "features/Policy Editor/ABAC",
								},
							],
						},
					],
				},
				{
					type: "doc",
					id: "features/user-management",
					label: "User Management",
				},
				{
					type: "category",
					collapsible: true,
					collapsed: true,
					label: "Audit Logs",
					items: [
						{
							type: "autogenerated",
							dirName: "features/Audit Logs",
						},
					],
				},
				{
					type: "doc",
					id: "features/coming-soon",
					label: "Coming Soon",
				},
			],
		},
		{
			type: "category",
			collapsible: true,
			label: "Concepts",
			items: [
				{
					type: "doc",
					id: "concepts/authorization_concepts",
					label: "Authorization Concepts",
				},
				{
					type: "doc",
					id: "concepts/control_plane_and_data_plane",
					label: "Control & Data Planes",
				},
				{
					type: "doc",
					id: "concepts/multi-tenancy",
					label: "Multi-Tenancy",
				},
				{
					type: "doc",
					id: "concepts/pdp",
					label: "Policy Decision Point",
				},
			],
		},
		{
			type: "category",
			collapsible: true,
			collapsed: false,
			label: "API",
			items: [
				{
					type: "doc",
					id: "api/migrating-v1-v2",
					label: "Migrating v1 to v2",
				},
				{
					type: "category",
					collapsible: true,
					collapsed: true,
					label: "Working with ABAC",
					items: [
						{
							type: "doc",
							id: "api/working-with-abac/overview",
							label: "Overview",
						},
						{
							type: "doc",
							id: "api/working-with-abac/conditions",
							label: "Conditions",
						},
						{
							type: "doc",
							id: "api/working-with-abac/building-conditions",
							label: "Building Conditions",
						},
						{
							type: "doc",
							id: "api/working-with-abac/condition-sets",
							label: "Condition Sets",
						},
						{
							type: "doc",
							id: "api/working-with-abac/condition-set-rules",
							label: "Condition Set Rules",
						},
						{
							type: "doc",
							id: "api/working-with-abac/examples",
							label: "Examples",
						},
					],
				},
				{
					type: "doc",
					id: "api/api_reference",
					label: "API Reference",
				},
				{
					type: "doc",
					id: "api/api_with_cli",
					label: "API Calls using the CLI",
				},
			],
		},
		{
			type: "category",
			collapsible: true,
			collapsed: true,
			label: "SDK",
			items: [
				{
					type: "autogenerated",
					dirName: "SDKs",
				},
			],
		},
		{
			type: "category",
			collapsible: true,
			label: "Security",
			items: [
				{
					type: "autogenerated",
					dirName: "security",
				},
			],
		},
		{
			type: "doc",
			id: "faq",
			label: "FAQ",
		},
	],
};

module.exports = sidebars;
