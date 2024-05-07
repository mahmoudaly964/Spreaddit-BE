const messageSeedData = [
  {
    _id: "6635fd782a6caf9a8171930c",
    conversationId: "6635fd782a6caf9a8171930a",
    conversationSubject: "programming",
    isDeleted: "false",
    senderType: "user",
    senderId: "624a4a94c66738f13854b474",
    recieverId: "624a4fbf3f392aefdb4dd1c8",
    parentMessageId: null,
    contentType: "text",
    content: "what is best c++ or java",
    isRead: false,
  },
  {
    _id: "6635fe382a6caf9a8171931f",
    conversationId: "6635fd782a6caf9a8171930a",
    conversationSubject: "programming",
    isDeleted: "false",
    senderType: "user",
    senderId: "624a4fbf3f392aefdb4dd1c8",
    recieverId: "624a4a94c66738f13854b474",
    parentMessageId: "6635fd782a6caf9a8171930c",
    contentType: "text",
    content: "it depend on application",
    isRead: true,
  },
  {
    _id: "6635fe6f2a6caf9a81719328",
    conversationId: "6635fd782a6caf9a8171930a",
    conversationSubject: "programming",
    isDeleted: "false",
    senderType: "user",
    senderId: "624a4a94c66738f13854b474",
    recieverId: "624a4fbf3f392aefdb4dd1c8",
    parentMessageId: "6635fe382a6caf9a8171931f",
    contentType: "text",
    content: "what if i want to make web application",
    isRead: false,
  },
  {
    _id: "6635ff2d2a6caf9a81719335",
    conversationId: "6635fd782a6caf9a8171930a",
    conversationSubject: "programming",
    isDeleted: "false",
    senderType: "user",
    senderId: "624a4fbf3f392aefdb4dd1c8",
    recieverId: "624a4a94c66738f13854b474",
    parentMessageId: "6635fe6f2a6caf9a81719328",
    contentType: "text",
    content: "for web you can use java",
    isRead: true,
  },

  {
    _id: "6635ff8e2a6caf9a81719348",
    conversationId: "6635ff8e2a6caf9a81719346",
    conversationSubject: "football",
    isDeleted: "false",
    senderType: "user",
    senderId: "624a4fbf3f392aefdb4dd1c8",
    recieverId: "624a4a94c66738f13854b474",
    parentMessageId: null,
    contentType: "text",
    content: "what is the best club in england",
    isRead: true,
  },
  {
    _id: "6635ffdc2a6caf9a81719351",
    conversationId: "6635ff8e2a6caf9a81719346",
    conversationSubject: "football",
    isDeleted: "false",
    senderType: "user",
    senderId: "624a4a94c66738f13854b474",
    recieverId: "624a4fbf3f392aefdb4dd1c8",
    parentMessageId: "6635ff8e2a6caf9a81719348",
    contentType: "text",
    content: "it is hard but i think it is between liverpool and man utd",
    isRead: true,
  },

  {
    _id: "663600112a6caf9a8171935e",
    conversationId: "6635ff8e2a6caf9a81719346",
    conversationSubject: "football",
    isDeleted: "false",
    senderType: "user",
    senderId: "624a4fbf3f392aefdb4dd1c8",
    recieverId: "624a4a94c66738f13854b474",
    parentMessageId: "6635ffdc2a6caf9a81719351",
    contentType: "text",
    content: "what is your opinion",
    isRead: false,
  },

  {
    _id: "6636004f2a6caf9a81719367",
    conversationId: "6635ff8e2a6caf9a81719346",
    conversationSubject: "football",
    isDeleted: "false",
    senderType: "user",
    senderId: "624a4a94c66738f13854b474",
    recieverId: "624a4fbf3f392aefdb4dd1c8",
    parentMessageId: "663600112a6caf9a8171935e",
    contentType: "text",
    content: "in my opinion it is liverpool because they have 6 CL",
    isRead: true,
  },
];

exports.data = messageSeedData;
