import nextId from "react-id-generator"

export const sideBarData = [
  {
    node: {
      id: nextId(),
      label: "Introduction",
      items: null,
      link: "/docs/introduction"
    }
  },
  // {
  //   node: {
  //     id: nextId(),
  //     label: "Version History",
  //     items: null,
  //     link: "/docs/version-history"
  //   }
  // },
  {
    node: {
      id: nextId(),
      label: "Releases",
      items: null,
      link: "/docs/releases"
    }
  },
  {
    node: {
      id: nextId(),
      label: "Downloads",
      items: null,
      link: "/download"
    }
  },
  // {
  //   node: {
  //     id: nextId(),
  //     label: "Compatibility",
  //     items: null,
  //     link: "/docs/compatibility"
  //   }
  // },
  {
    node: {
      id: nextId(),
      label: "Getting started",
      items: [
        {label: "Java Auto-Instrumentation Agent", link: "/docs/getting-started/java-auto-instrumentation-agent"},
        {label: "Java SDK", link: "/docs/getting-started/java-sdk"},
        {label: "JavaScript SDK", link: "/docs/getting-started/javascript-sdk"},
        {label: "Using CloudWatch Metrics", link: "/docs/getting-started/cloudwatch-metrics"},
        // {label: "ECS Container Metrics Receiver", link: "/docs/getting-started/ecs-metrics-receiver"}
      ],
      link: "/docs/null"
    }
  },
  {
    node: {
      id: nextId(),
      label: "Setup",
      items: [
        {label: "Permissions", link: "/docs/setup/permissions"},
        {label: "Docker Images", link: "/docs/setup/docker-images"},
        {label: "For ECS", link: "/docs/setup/ecs"},
        {label: "For EC2", link: "/docs/setup/ec2"},
        {label: "For EKS", link: "/docs/setup/eks"},
        {label: "On-Premises", link: "/docs/setup/on-premises"}
      ],
      link: "/docs/null"
    }
  },
  {
    node: {
      id: nextId(),
      label: "Know Your Data",
      items: [
        {label: "Traces", link: "https://github.com/open-telemetry/opentelemetry-specification/blob/master/specification/overview.md"},
        {label: "Metrics", link: "https://github.com/open-telemetry/opentelemetry-specification/blob/master/specification/overview.md"}
      ],
      link: "/docs/null"
    }
  },
  {
    node: {
      id: nextId(),
      label: "Other",
      items: [
        {label: "FAQ", link: "https://aws-content-sandbox.aka.amazon.com/blackfoot/users/habao/Himalia/faqs/"},
        {label: "Glossary", link: "https://github.com/open-telemetry/opentelemetry-specification/blob/master/specification/glossary.md"},
        {label: "Resources", link: "/resources"},
      ],
      link: "/docs/null"
    }
  }
]