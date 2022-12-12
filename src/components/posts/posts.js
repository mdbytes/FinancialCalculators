import ReactDOMServer from "react-dom/server";

// Articles
import MortgageAmortization from "./pages/MortgageAmortization";
import PastPresentFuture from "./pages/PastPresentFuture";
import AnnuityValuation from "./pages/AnnuityValuation";
import RetirementPlanner from "./pages/RetirementPlanner";

export const allPosts = [
  {
    id: 9942,
    date: "2018-02-19T12:37:46",
    date_gmt: "2018-02-19T18:37:46",
    modified: "2022-05-20T14:12:19",
    modified_gmt: "2022-05-20T19:12:19",
    slug: "mortgage-amortization",
    status: "publish",
    type: "post",
    title: {
      rendered: "Mortgage Amortization",
    },
    content: {
      rendered: ReactDOMServer.renderToStaticMarkup(<MortgageAmortization />),
      protected: false,
    },
    contentJsx: <MortgageAmortization />,
    excerptJsx: <MortgageAmortization excerpt={true} />,
    seo: ReactDOMServer.renderToStaticMarkup(
      <MortgageAmortization seo={true} />
    ),
    author: 1,
    categories: [7],
  },
  {
    id: 9943,
    date: "2022-02-19T12:37:46",
    date_gmt: "2018-02-19T18:37:46",
    modified: "2022-05-20T14:12:19",
    modified_gmt: "2022-05-20T19:12:19",
    slug: "past-present-future",
    status: "publish",
    type: "post",
    title: {
      rendered: "Past, Present and Future Values",
    },
    content: {
      rendered: ReactDOMServer.renderToStaticMarkup(<PastPresentFuture />),
      protected: false,
    },
    contentJsx: <PastPresentFuture />,
    excerptJsx: <PastPresentFuture excerpt={true} />,
    seo: ReactDOMServer.renderToStaticMarkup(<PastPresentFuture seo={true} />),
    author: 1,
    categories: [7],
  },
  {
    id: 9944,
    date: "2022-02-19T12:37:46",
    date_gmt: "2018-02-19T18:37:46",
    modified: "2022-05-20T14:12:19",
    modified_gmt: "2022-05-20T19:12:19",
    slug: "annuity-valuation",
    status: "publish",
    type: "post",
    title: {
      rendered: "Annuity Valuation",
    },
    content: {
      rendered: ReactDOMServer.renderToStaticMarkup(<AnnuityValuation />),
      protected: false,
    },
    contentJsx: <AnnuityValuation />,
    excerptJsx: <AnnuityValuation excerpt={true} />,
    seo: ReactDOMServer.renderToStaticMarkup(<AnnuityValuation seo={true} />),
    author: 1,
    categories: [7],
  },
  {
    id: 9945,
    date: "2022-02-19T12:37:46",
    date_gmt: "2018-02-19T18:37:46",
    modified: "2022-05-20T14:12:19",
    modified_gmt: "2022-05-20T19:12:19",
    slug: "retirement-planner",
    status: "publish",
    type: "post",
    title: {
      rendered: "Planning for Retirement",
    },
    content: {
      rendered: ReactDOMServer.renderToStaticMarkup(<RetirementPlanner />),
      protected: false,
    },
    contentJsx: <RetirementPlanner />,
    excerptJsx: <RetirementPlanner excerpt={true} />,
    seo: ReactDOMServer.renderToStaticMarkup(<RetirementPlanner seo={true} />),
    author: 1,
    categories: [7],
  },
];
