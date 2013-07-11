//
//  version_API.h
//  ForgeModule
//
//  Created by Patrick Rudolph on 05.11.12.
//  Copyright (c) 2012 Hojoki GmbH. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface version_API : NSObject

+ (void)getVersionString:(ForgeTask*)task;

@end
