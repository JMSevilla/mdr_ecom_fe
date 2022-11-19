class FeatureSpiels {
  fieldLabels = {
    id: "fieldID",
    featureName: "Features name",
    featureType: "Project Scale",
    actions: "Actions",
  };
  propertyNames = {
    id: "id",
    featureName: "featureName",
    featureType: "featureType",
  };

  // project categories fields
  projectCategoriesFieldLabels = {
    id: "id",
    categoryName: "Category Name",
    isActive: "Status",
    actions: "Actions",
  };
  projectCategoriesPropertyNames = {
    id: "id",
    categoryName: "categoryName",
    isActive: "isActive",
  };

  //training fields
  trainingFieldsLabels = {
    id: "id",
    Title: "Training",
    Category: "Category",
    Days: "Days",
    ImgUrl: "Img",
    Status: "Status",
    Level: "Level",
    actions: "Actions",
  };
  trainingPropertyNames = {
    id: "id",
    trainingTitle: "trainingTitle",
    trainingCategory: "trainingCategory",
    trainingDays: "trainingDays",
    trainingImgURL: "trainingImgURL",
    trainingStatus: "trainingStatus",
    trainingLevel: "trainingLevel",
  };
}

export default new FeatureSpiels();
